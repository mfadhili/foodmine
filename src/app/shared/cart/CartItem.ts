import {Food} from "../food/food";

export class CartItem{
  food: Food;
  quantity: number;


  constructor(food: Food) {
    this.food = food;
    this.quantity = 1;
  }

  get price():number{
    return this.food.price *  this.quantity;
  }

}
