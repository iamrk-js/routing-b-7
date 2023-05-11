import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboradComponent } from './shared/component/dashborad/dashborad.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './shared/component/users/user/user.component';
import { ProductComponent } from './shared/component/products/product/product.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';
import { EdituserComponent } from './shared/component/users/edituser/edituser.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    UserComponent,
    ProductComponent,
    PageNotFoundComponent,
    EditProductComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
