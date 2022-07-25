import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { FavProductListComponent } from './fav-product-list/fav-product-list.component';


@NgModule({
  declarations: [
    ProductComponent,ProductListComponent,FavProductListComponent

  ],
  imports: [
    CommonModule,ProductRoutingModule,MaterialModule,MatIconModule
  ]
})
export class ProductModule { }
