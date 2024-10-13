import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'our-product', component: ProductListingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'log-in', component: LogInComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
