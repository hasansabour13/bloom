import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ShComponent } from './sh/sh.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
  { path: '', component: HomeComponent}, // مسیر پیش‌فرض
  { path: 'project', component:ProjectComponent  },
  { path: 'sh', component:ShComponent },
  { path: 'slider', component:SliderComponent },
  { path: 'login', component:LoginComponent },
  { path: 'cart', component:CartComponent },
  {
    path: 'product-detail/:id',
    component: ProductDetailComponent//برای نشان دادن جزییات شلوار
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'  // اختیاریه ولی باعث میشه موقع برگشتن، جای قبلی اسکرول یادت بمونه
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
