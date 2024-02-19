import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { NavbarComponent } from './components/navbar/navbar.component';
import { MangeRepresntorComponent } from './components/mange-represntor/mange-represntor.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { AddRepresntorComponent } from './components/add-represntor/add-represntor.component';
import { ToastrModule } from 'ngx-toastr';
import { EditRepresntorComponent } from './components/edit-represntor/edit-represntor.component';
import { MangeministryComponent } from './components/mangeministry/mangeministry.component';
import { AddministryComponent } from './components/addministry/addministry.component';
import { UpdateministryComponent } from './components/updateministry/updateministry.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    NavbarComponent,
    MangeRepresntorComponent,
    LoginComponent,
    AddRepresntorComponent,
    EditRepresntorComponent,
    MangeministryComponent,
    AddministryComponent,
    UpdateministryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
