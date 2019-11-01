import { Component, OnInit } from '@angular/core';
import { CompanyDto } from 'src/app/model/models';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.css']
})
export class ListCompaniesComponent implements OnInit {

  companies : CompanyDto [] = []

  constructor(private companyService : CompanyService,
                      private router : Router) { }

  ngOnInit() {
    this.listCompanies()
  }

  private listCompanies(){
    this.companyService.listAll().subscribe(
      (result) => {
          this.companies = result
  }
    )
}

  openNewCompany(){
    this.router.navigateByUrl('/new-company')
  }

}
