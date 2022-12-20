import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
})
export class ProductsModule { }
