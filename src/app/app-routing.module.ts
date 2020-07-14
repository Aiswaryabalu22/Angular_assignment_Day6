import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';


const routes: Routes = [
  {path:'add', component: AddProductComponent },
  {path: 'view', component: ProductViewComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
