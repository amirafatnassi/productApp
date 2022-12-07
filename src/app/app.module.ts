import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ProductsModule, UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
