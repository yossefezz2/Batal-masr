import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { MangeRepresntorComponent } from './components/mange-represntor/mange-represntor.component';
import { LoginComponent } from './components/login/login.component';
import { AddRepresntorComponent } from './components/add-represntor/add-represntor.component';
import { EditRepresntorComponent } from './components/edit-represntor/edit-represntor.component';
import { MangeministryComponent } from './components/mangeministry/mangeministry.component';
import { AddministryComponent } from './components/addministry/addministry.component';
import { UpdateministryComponent } from './components/updateministry/updateministry.component';
import { MangeAssosiationComponent } from './components/mange-assosiation/mange-assosiation.component';
import { AddAssosiationComponent } from './components/add-assosiation/add-assosiation.component';
import { EditAssosiationComponent } from './components/edit-assosiation/edit-assosiation.component';
import { authGuard } from './core/Guard/auth.guard';

const routes: Routes = [
  {path:'',component:AuthLayoutComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,title:'login'}
  ]},

  {path:'',component:BlankLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', canActivate:[authGuard],component:HomeComponent,title:'home'},
    {path:'MangeRepresntor',canActivate:[authGuard],component:MangeRepresntorComponent,title:'MangeRepresntor'},
    {path:'AddRepresntor',canActivate:[authGuard],component:AddRepresntorComponent,title:'AddRepresntor'},
    {path:'EditRepresntor/:id',canActivate:[authGuard],component:EditRepresntorComponent,title:'EditRepresntor'},
    {path:'mangeMinistry',canActivate:[authGuard],component:MangeministryComponent,title:'mangeMinistry'},
    {path:'addMinistry',canActivate:[authGuard],component:AddministryComponent,title:'addMinistry'},
    {path:'updataMinistry/:id',canActivate:[authGuard],component:UpdateministryComponent,title:'EditMinistry'},
    {path:'mangeAssosiation',canActivate:[authGuard],component:MangeAssosiationComponent,title:'mangeAssosiation'},
    {path:'addAssosiation',canActivate:[authGuard],component:AddAssosiationComponent,title:'addAssosiation'},
    {path:'updataAssosiation/:id',canActivate:[authGuard],component:EditAssosiationComponent,title:'updataAssosiation'},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
