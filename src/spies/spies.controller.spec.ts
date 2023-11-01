import { Test, TestingModule } from '@nestjs/testing';
import { SpiesController } from './spies.controller';

describe('SpiesController', () => {
  let controller: SpiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpiesController],
    }).compile();

    controller = module.get<SpiesController>(SpiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
