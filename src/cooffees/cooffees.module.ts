import { Module } from '@nestjs/common';
import { CooffeesController } from './cooffees.controller';
import { CooffeesService } from './cooffees.service';

@Module({controllers: [CooffeesController],providers:[CooffeesService]})
export class CooffeesModule {}
