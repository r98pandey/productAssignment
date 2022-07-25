import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  
  { path: 'auth', loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [{ 

    path: 'product', loadChildren: () => import('./page/product/product.module').then(m => m.ProductModule)},
    { path: '', redirectTo: 'product', pathMatch: 'full' }, 
  ]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
