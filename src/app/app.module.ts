import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TreeFlatOverviewExample } from './product-listing/product-listing.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertisementComponent } from './home/advertisement/advertisement.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ProductGridComponent } from './home/product-grid/product-grid.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AdvertisementComponent,
    CategoriesComponent,
    ProductGridComponent,
    TestHeaderComponent,
    ContactComponent,
    SignUpComponent,
    ShopingCartComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    TreeFlatOverviewExample,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
