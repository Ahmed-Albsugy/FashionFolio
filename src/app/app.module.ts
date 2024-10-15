import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertisementComponent } from './home/advertisement/advertisement.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ProductGridComponent } from './home/product-grid/product-grid.component';
import { TestHeaderComponent } from './test-header/test-header.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { LogInComponent } from './log-in/log-in.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TreeComponent } from './product-listing/tree/tree.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FavoriteComponent } from './user-dashboard/favorite/favorite.component';


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
    SignupComponent,
    ShopingCartComponent,
    LogInComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    UserDashboardComponent,
    FavoriteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    TreeComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatListModule,
    MatDividerModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
