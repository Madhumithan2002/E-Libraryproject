import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AddbookComponent } from './addbook/addbook.component';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
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
    path: 'search',
    component:SearchComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
