import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { TestHeaderComponent } from './test-header/test-header.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-product', component: ProductListingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'shopping-cart', component: ShopingCartComponent },
  { path: 'log-in', component: LogInComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'products', component: ProductListingComponent },
  { path: 'cart', component: ShopingCartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
