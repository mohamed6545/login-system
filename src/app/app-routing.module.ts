import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { LodinsComponent } from './loding/components/lodins/lodins.component';

const routes: Routes = [
  {path:"loding" , component:LodinsComponent},
  {path:"products" , component:AllProductsComponent},
  {path:"details/:id", component:ProductsDetailsComponent},
  {path:"cart" , component:CartComponent},
  {path:"**" ,redirectTo:"porducts" , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
