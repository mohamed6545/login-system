import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
products:any[]=[];
Categories:any[]=[];
loading:boolean = false;
base64:any='';
form!:FormGroup
 cartproducts:any[]=[]
constructor(private service:ProductsService , private build:FormBuilder) { }

ngOnInit(): void{
  this.form=this.build.group({
    title: ['' , [Validators.required]],
    price: ['', [Validators.required]],
    description:['', [Validators.required]],
    image:['', [Validators.required]],
    category: ['', [Validators.required]]
  })
  this.getproducts()
  this.getCategories()
}
getproducts(){
  this.service.getAllproducts().subscribe((res:any) => {
    this.products=res
    console.log(res)
  })
}


 
getCategories(){
  this.service.getAllCategories().subscribe((res:any) => {
    this.Categories=res
    console.log(res)
  })
}
filterCategory(event:any){
  this.form.get('category')?.setValue(event.target.value)
  console.log(this.form)
  let value = event.target.value;
 if(value=="all"){
 this.getproducts()
 }else{this.getProductsCategory(value)}
}

getProductsCategory(keyword:string){
  this.loading= true
  this.service.getproductsByCategory(keyword).subscribe((res:any) => {
    this.loading=false
this.products=res
  })
}
 
addToCart(event:any){
 if("cart" in localStorage){
  this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
  let exist = this.cartproducts.find(item => item.item.id== event.item.id)
  if(exist){
    alert("product is already in your cart")
  }else{
    this.cartproducts.push(event)
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
  }
 } else {
  this.cartproducts.push(event)
  localStorage.setItem("cart" , JSON.stringify(this.cartproducts))
 }
}

getImagePath(event:any){
const file=event.target.files[0];
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () =>{
  this.base64 = reader.result;
  this.form.get('image')?.setValue( "sdfsdf")
  console.log(this.base64)
};
}

addproduct(){
  const model = this.form.value
  this.service.createproduct(model).subscribe(res =>{
     alert("Add product success")
  })
}

 
}
