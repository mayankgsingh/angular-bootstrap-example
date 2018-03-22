import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'signup', component: SignupComponent, data: { title: 'Signup' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
    ),
	NgbModule.forRoot(),
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
