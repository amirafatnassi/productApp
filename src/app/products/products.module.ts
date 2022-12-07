import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    DetailProductComponent,
    ProductComponent,
    EditProductComponent,
    
  ],
  imports: [CommonModule, ProductsRoutingModule, FormsModule, ReactiveFormsModule,
  HttpClientModule],
})
export class ProductsModule {}
