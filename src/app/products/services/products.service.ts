import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllproducts ( ){
    return this.http.get('https://fakestoreapi.com/products')
  }

 getAllCategories (){
  return this.http.get('https://fakestoreapi.com/products/categories')
 }


 getproductsByCategory(keyword:string){
  return this.http.get('https://fakestoreapi.com/products/category/'+keyword)
 }


 getProductById (id:any){
  return this.http.get('https://fakestoreapi.com/products/'+id)
 }
 
 createproduct(model:any){
  return this.http.post('https://fakestoreapi.com/products/',model)
 }
 
}
