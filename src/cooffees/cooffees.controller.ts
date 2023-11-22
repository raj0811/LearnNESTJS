import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CooffeesService } from './cooffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('cooffees')
export class CooffeesController {

    constructor(private readonly cooffeesService:CooffeesService){

    }

    @Get()
    findAll(@Query() paginationQuery){
        const {limit, offset} = paginationQuery
        return this.cooffeesService.findAll()
        // return `this action retuns all coffees . Limit ${limit}, offset ${offset}`
       }

    @Get(':id')
    findOne(@Param('id') id: string){
            return this.cooffeesService.findOne(id)
        //    return `this action retuns #${id} coffee`
        }
    @Post()
    create(@Body() createCoffeeDto:CreateCoffeeDto){
        // return body
        console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.cooffeesService.create(createCoffeeDto)
    }
    @Patch(':id')
    update(@Param(`id`) id: string, @Body() updateCoffeeDto:UpdateCoffeeDto){
        
        return  this.cooffeesService.update(id,updateCoffeeDto)
    }
    @Delete(':id')
    remove(@Param('id') id:string,@Body() body){
        return this.cooffeesService.remove(id)
    }
    

}
