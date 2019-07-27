import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import {RouterModule} from '@angular/router';

const routes = [
  { path: '', component: ProfileComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
  { path: '**', component: ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
