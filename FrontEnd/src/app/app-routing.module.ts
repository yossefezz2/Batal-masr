import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { MangeRepresntorComponent } from './components/mange-represntor/mange-represntor.component';
import { LoginComponent } from './components/login/login.component';
import { AddRepresntorComponent } from './components/add-represntor/add-represntor.component';
import { EditRepresntorComponent } from './components/edit-represntor/edit-represntor.component';

const routes: Routes = [
  {path:'',component:AuthLayoutComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,title:'login'}
  ]},

  {path:'',component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'home'},
    {path:'MangeRepresntor',component:MangeRepresntorComponent,title:'MangeRepresntor'},
    {path:'AddRepresntor',component:AddRepresntorComponent,title:'AddRepresntor'},
    {path:'EditRepresntor/:id',component:EditRepresntorComponent,title:'EditRepresntor'},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
