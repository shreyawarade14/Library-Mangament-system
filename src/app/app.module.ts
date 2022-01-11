import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './dashboard/books/books.component';
import { ProfileComponent } from './dashboard/profile/profile.component';

import { RentStatusComponent } from './dashboard/rent-status/rent-status.component';
import { AddBooksComponent } from './admin-dash/add-books/add-books.component';
import { AddCategoryComponent } from './admin-dash/add-category/add-category.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    
    LoginPageComponent,
    SignUpComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BooksComponent,
    ProfileComponent,
    
    RentStatusComponent,
         AddBooksComponent,
         AddCategoryComponent,
         PlansComponent,
         AdminLoginComponent,
         AdminDashComponent,
         
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
