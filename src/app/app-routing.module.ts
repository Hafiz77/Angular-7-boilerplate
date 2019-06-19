import { UserlistComponent } from './user/userlist/userlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { UsercdetailsComponent } from './user/usercdetails/usercdetails.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { UsercreateComponent } from './user/usercreate/usercreate.component';


const routes: Routes = [
  {path: 'products' , component: ProductListComponent},
  {path: 'product/:id' , component: ProductDetailsComponent},
  {path: 'users' , component: UserlistComponent},
  {path: 'users/create', component: UsercreateComponent},
  {path: 'users/:id' , component: UsercdetailsComponent},
  {path: 'users/edit/:id', component: UserupdateComponent},
  {path: '',  redirectTo: '/products', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
