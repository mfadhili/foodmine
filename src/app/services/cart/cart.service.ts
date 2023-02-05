import { Injectable } from '@angular/core';
import {Cart} from "../../shared/cart/Cart";
import {Food} from "../../shared/food/food";
import {CartItem} from "../../shared/cart/CartItem";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(food:Food){
    // check for food item
    let cartItem = this.cart.items.find(item => item.food.id == food.id);
    if (cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1); // add if it is there
      return
    }
    else{
      this.cart.items.push(new CartItem(food))
    }

  }

  removeFromCart(foodId:number){
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);

  }

  changeQuantity(foodId:number, quantity:number){
    let cartIem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartIem) return;
    cartIem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
