import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  {
    path : "" , component : HomeComponent
  },{
    path: 'Menu' , component : MenuComponent
  },
  {
    path : 'about' , component : AboutUsComponent
  },{
    path: 'cart' , component : CartComponent
  }, {
    path: 'Menu/products/:productId', component: DetailsComponent
  }, {

    path: 'cart', component: CartComponent

  },
  // {
  //   path: 'details' , component : DetailsComponent
  // }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
