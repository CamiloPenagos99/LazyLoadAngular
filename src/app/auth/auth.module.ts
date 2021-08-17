import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importar modulo de rutas hijas
import { AuthRoutingModule } from './auth-routing.module';


//importar componentes
import { LoginComponent } from './pages/login/login.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { RegisterComponent } from './pages/register/register.component';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
