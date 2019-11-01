import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/service/job.service';
import { JobDto } from 'src/app/model/models';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  jobs : JobDto [] = []

  constructor(private jobService : JobService) { }

  ngOnInit() {
    this.listJobs()
  }

  private listJobs(){
    this.jobService.listAll().subscribe(
      (result) => {
          this.jobs = result
      }
    )
  }

}
