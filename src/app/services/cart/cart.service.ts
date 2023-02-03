import { Injectable } from '@angular/core';
import {Cart} from "../../shared/cart/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }
}
