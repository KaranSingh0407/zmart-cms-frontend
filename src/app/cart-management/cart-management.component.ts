import { Component, OnInit } from '@angular/core';
import { CartItemModel } from '../model/CartItemModel';
import { ZmartService } from '../zmart.service';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.css']
})
export class CartManagementComponent implements OnInit {

  cartItem:CartItemModel[];
  total=0;

  constructor(private service:ZmartService) { }

  ngOnInit(): void {
    this.service.viewCart(101).subscribe(
      (data)=>{
        this.cartItem=data.cartItem;
      }
      )
  }

  removeItem(productId:number){
    this.service.removeItem(101,productId).subscribe(
      (success)=>{
        this.cartItem = this.cartItem.filter(e=>e.productId != productId);
      }
    )
  }
  ngAfterContentChecked() {
    this.total = this.cartItem.reduce(
        (prev, cur) => prev + cur.quantity * cur.price, 0);
  }

  addOne(cartItem){
    cartItem.quantity++;
    CartManagementComponent.validateCount(cartItem);
    this.service.changeQuantity(101,cartItem.productId,cartItem.quantity);
  }
  minusOne(cartItem){
    cartItem.quantity--;
    CartManagementComponent.validateCount(cartItem);
    this.service.changeQuantity(101,cartItem.productId,cartItem.quantity);
  }

  static validateCount(cartItem) {
    const max = 10;
    if (cartItem.quantity > max) {
        cartItem.quantity = max;
    } else if (cartItem.quantity < 1) {
        cartItem.quantity = 1;
    }
    console.log(cartItem.quantity);
  }

  checkOut(){
    
  }

}
