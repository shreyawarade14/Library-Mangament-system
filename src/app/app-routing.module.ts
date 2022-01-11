import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './dashboard/books/books.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { RentStatusComponent } from './dashboard/rent-status/rent-status.component';
import { AddBooksComponent } from './admin-dash/add-books/add-books.component';
import { AddCategoryComponent } from './admin-dash/add-category/add-category.component';
import { PlansComponent } from './dashboard/plans/plans.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RentApprovalComponent } from './admin-dash/rent-approval/rent-approval.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
const routes: Routes = [
  {
    path: 'contact-us',
    pathMatch: 'full',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    pathMatch: 'full',
    component: AboutusComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPageComponent
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component: SignUpComponent
  },
  
  {
    path:'admin-login',
    pathMatch: 'full',
    component: AdminLoginComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'rent-status',
        component: RentStatusComponent
      },
      {
        path: 'plans',
        component: PlansComponent
      },
    ]
  },

  {
        path: 'admin-dash',
        component: AdminDashComponent,
        children: [
          {
            path: 'add-books',
            component: AddBooksComponent
          },
          {
            path: 'add-category',
            component: AddCategoryComponent
          },
          {
            path: 'rent-approval',
            component: RentApprovalComponent
          },
        ]
  },
  
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
