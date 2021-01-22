import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CartModel } from './model/CartModel';


@Injectable({
  providedIn: 'root'
})
export class ZmartService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:9000/cart/";
  
  public viewCart(userId:number):Observable<CartModel>{
    return this.http.get<CartModel>(this.baseUrl+"viewcart/"+userId);
  }

  public removeItem(userId:number, productId:number){
    return this.http.delete(this.baseUrl+"removeitem/"+ userId+"/" +productId)
  }

  public changeQuantity(userId:number, productId:number, quantity:number):Observable<CartModel>{
    return this.http.put<CartModel>(this.baseUrl + "changequantity/"+ userId + "/"+productId ,quantity);
  }

  public checkOut(userId:number){
    
  }

}
