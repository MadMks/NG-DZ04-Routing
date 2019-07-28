import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {AboutComponent} from './components/about/about.component';
import {ProductComponent} from './components/product/product.component';


const routes: Routes = [
  { path: '', component: ProfileComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
  { path: '**', component: ProductComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
