import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListJobsComponent } from './jobs/list-jobs/list-jobs.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { ListCompaniesComponent } from './company/list-companies/list-companies.component';
import { NewCompanyComponent } from './company/new-company/new-company.component';


const routes: Routes = [
  { path:"jobs", component: ListJobsComponent },
  { path:"new-job", component: NewJobComponent },
  { path:"companies", component: ListCompaniesComponent },
  { path:"new-company", component: NewCompanyComponent },
  { path:"", redirectTo: "/jobs", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
