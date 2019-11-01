import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndustryService } from 'src/app/service/industry.service';
import { CompanyService } from 'src/app/service/company.service';
import { IndustryDto, NewCompanyDto } from 'src/app/model/models';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  industries : IndustryDto [] = []
  company = new NewCompanyDto()

  constructor(private router : Router,
              private industryService : IndustryService,
              private companyService : CompanyService) { }

  ngOnInit() {
    this.listIndustries()
  }

  save(){
    this.companyService.save(this.company).subscribe(
      () => {
        this.router.navigateByUrl('/companies')
      }
    )
  }

  cancel(){
    this.router.navigateByUrl('/companies')
  }


  private listIndustries(){
    this.industryService.listAll().subscribe(
      (result) => {
        this.industries = result
      }
    )
  }

}
