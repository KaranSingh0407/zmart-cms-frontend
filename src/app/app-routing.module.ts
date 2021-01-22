import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartManagementComponent } from './cart-management/cart-management.component';


const routes: Routes = [
  {component:CartManagementComponent,path:'cart'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
