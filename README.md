## Description

This project is created with [Nest](https://nestjs.com/) and [TypeORM](https://typeorm.io/) is a marketplace API based on Polygon's technical test challenge.

Use clean architecture based on DDD and SOLID principles.

The endpoints that satisfy the challenge are the following:

1. List of products. => GET /api/products
2. Search products. => GET /api/products/search/:term
3. See product detail. => GET /api/products/:id
4. Add products to the shopping cart. => POST /api/shopping-cart-details
5. See shopping cart detail. => GET /api/shopping-carts/:id
6. Remove products from the shopping cart. => DELETE /api/shopping-cart-details/:id
7. Display products by category. => GET /api/products/category/:id

In the infrastructure part the project uses Docker with a docker-compose.yml file that has the definition of the database service in PostgreSQL and a service with Adminer to view the content of the database in web format.

To use docker-compose you must have docker installed and **execute the following commands before running the project**:

```bash
$ docker-compose up -d // Start the services.
```

```bash
$ docker-compose stop // Stop the services.
```

```bash
$ docker-compose down -v // Stop and delete the services
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

Due to time constraints I couldn't implement the unit and e2e tests.

## API Documentation

To document the API a Postman collection is included in the `documentation` folder.
