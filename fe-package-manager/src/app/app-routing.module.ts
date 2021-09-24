import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {CanActivateUser} from "./services/can.active"
import {OrderDetailComponent} from "./order-detail/order-detail.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [CanActivateUser]  },
  { path: 'order/:id', component: OrderDetailComponent, canActivate: [CanActivateUser]  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateUser, Permissions]
})
export class AppRoutingModule { }
