import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { SearchComponent } from './search/search.component'


@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    LoginComponent,
    HeaderComponent,
    AddbookComponent,
    AboutpageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
