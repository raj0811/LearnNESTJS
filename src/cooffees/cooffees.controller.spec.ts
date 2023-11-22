import { Test, TestingModule } from '@nestjs/testing';
import { CooffeesController } from './cooffees.controller';

describe('CooffeesController', () => {
  let controller: CooffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CooffeesController],
    }).compile();

    controller = module.get<CooffeesController>(CooffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
