import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entity/coffee.entity';

@Injectable()
export class CooffeesService {
    private coffees: Coffee[]=[
        {
            id:1,
            name:'Shipwreck',
            brand: 'Buddy Brew',
            flavors: ['chocolate','vanilla',],
           
        }
    ]

    findAll(){
        return this.coffees
    }

    findOne(id:string){
        const coffee = this.coffees.find(item=>item.id === +id);
        if(!coffee){
            throw new NotFoundException(`Coffee #${id} not found`)
        }

        return coffee
    }

    create(createCoffeeDot: any){
        this.coffees.push(createCoffeeDot);
        return createCoffeeDot
    }
    update(id: string,updateCoffeeDto:any){
        const existingCoffee = this.findOne(id);
        if(existingCoffee){

        }
    }

    remove(id:string){
        const coffeeIndex = this.coffees.findIndex(item=>item.id === +id);
        if(coffeeIndex >=0){
            this.coffees.splice(coffeeIndex,1)
        }
    }
}


