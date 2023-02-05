import { Injectable } from '@angular/core';
import {Cart} from "../../shared/cart/Cart";
import {Food} from "../../shared/food/food";
import {iterator} from "rxjs/internal/symbol/iterator";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if (cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1)
    }
    else {
      this.cart.items.push(new cartItem(food))
    }
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
