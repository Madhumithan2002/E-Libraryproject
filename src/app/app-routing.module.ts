import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AddbookComponent } from './addbook/addbook.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
 
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegistrationPageComponent
  },
  {
    path: 'AddBook',
    component:AddbookComponent
  },
  {
    path: 'about',
    component:AboutpageComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
