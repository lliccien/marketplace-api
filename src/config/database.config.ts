import * as dotenv from 'dotenv';

import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

export enum ENVIRONMENTS {
  PRODUCTION = 'production',
  STAGING = 'staging',
  DEVELOPMENT = 'development',
  AUTOMATED_TEST = 'automated_tests',
}

const production: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [join(__dirname, '../database/migrations/*.{ts,js}')],
  synchronize: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const development: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [join(__dirname, '../database/migrations/*.{ts,js}')],
  synchronize: true,
  namingStrategy: new SnakeNamingStrategy(),
};

const automatedTests: DataSourceOptions = {
  type: 'sqlite',
  database: `./data/tests.${Math.random()}.db`,
  migrations: [join(__dirname, '../database/migrations/*.{ts,js}')],
  synchronize: true,
  dropSchema: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
};

export const dataSourceOptions: DataSourceOptions = (() => {
  if (process.env.NODE_ENV === ENVIRONMENTS.PRODUCTION) {
    return production;
  }

  if (process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT) {
    return development;
  }

  if (process.env.NODE_ENV === ENVIRONMENTS.AUTOMATED_TEST) {
    return automatedTests;
  }

  throw new Error('No environment defined');
})();
const dataSource = new DataSource({
  ...dataSourceOptions,
  entities: [
    join(__dirname, '../**/infrastructure/persistence/entities/*.entity.ts'),
  ],
});

export default dataSource;
