import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { JobsComponent } from './pages/jobs/jobs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { JobsdetailComponent } from './pages/jobsdetail/jobsdetail.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    JobsComponent,
    NotFoundComponent,
    JobsdetailComponent,
    CategoriesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
