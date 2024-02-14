import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'',component:AuthLayoutComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,title:'login'}
  ]},

  {path:'',component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'homes'}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
