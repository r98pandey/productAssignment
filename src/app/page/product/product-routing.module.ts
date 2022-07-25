import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavProductListComponent } from './fav-product-list/fav-product-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
    { 
    path: '', 
    component: ProductComponent,
    children:[
        {
            path: '',
            redirectTo: 'product-list',
            pathMatch: 'full',
          },
        {path: 'product-list', component: ProductListComponent },
        {path: 'fav-product', component: FavProductListComponent },
    ]
     
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
