import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJobsComponent } from './jobs/list-jobs/list-jobs.component';
import { NewJobComponent } from './jobs/new-job/new-job.component';
import { ListCompaniesComponent } from './company/list-companies/list-companies.component';
import { NewCompanyComponent } from './company/new-company/new-company.component';

import { HttpClientModule } from "@angular/common/http" ;
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListJobsComponent,
    NewJobComponent,
    ListCompaniesComponent,
    NewCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
