import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CooffeesController } from './cooffees/cooffees.controller';
import { CooffeesService } from './cooffees/cooffees.service';
import { CooffeesModule } from './cooffees/cooffees.module';

@Module({
  imports: [CooffeesModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
