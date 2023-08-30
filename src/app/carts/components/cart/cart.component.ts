import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private service:CartsService ) {}
  cartproducts:any[] = [];
  total:any=0;
  form=FormGroup
  success:boolean = false
  ngOnInit(): void {
    this.getCartProducts()
  }


getCartProducts(){
  if("cart" in localStorage){
    this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
  }
  this.getCartTotal()
}
addAmount(index:number){
this.cartproducts[index].quantity++
this.getCartTotal()
localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}
minsAmount(index:number){
  this.cartproducts[index].quantity--
  this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}
datectChange(){
  this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}

deleteproduct(index:number){
this.cartproducts.splice(index,1)
this.getCartTotal()
localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}

clearCart(){
  this.cartproducts=[]
  this.getCartTotal()
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}
getCartTotal(){
this.total=0
for(let x in this.cartproducts){
  this.total += this.cartproducts[x].item.price * this.cartproducts[x].quantity 
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
}
}

addCart(){
   let products = this.cartproducts.map(item =>{
 return   {productId:item.item.id ,quantity: item.quantity }
   })
  let Model ={
    userId:5,
    date: new Date(),
    products:products
  }

this.service.createNewCart(Model).subscribe(res =>{
this.success=true
})

  console.log(Model)
}

}
