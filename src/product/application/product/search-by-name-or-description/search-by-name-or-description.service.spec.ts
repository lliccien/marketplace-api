import { Test, TestingModule } from '@nestjs/testing';
import { SearchByNameOrDescriptionService } from './search-by-name-or-description.service';

describe('SearchByNameOrDescriptionService', () => {
  let service: SearchByNameOrDescriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchByNameOrDescriptionService],
    }).compile();

    service = module.get<SearchByNameOrDescriptionService>(
      SearchByNameOrDescriptionService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
