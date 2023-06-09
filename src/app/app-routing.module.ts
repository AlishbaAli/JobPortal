import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './pages/jobs/jobs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { JobsdetailComponent } from './pages/jobsdetail/jobsdetail.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs/admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'jobs/:productId', component: JobsdetailComponent },
  {
    path: '**', component: NotFoundComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule]

})
export class AppRoutingModule { }
