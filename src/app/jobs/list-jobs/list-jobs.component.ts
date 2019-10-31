import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  jobs = []

  constructor(private jobService : JobService) { }

  ngOnInit() {
    this.listJobs()
  }

  listJobs(){
    this.jobService.listAll().subscribe(
      (result) => {
          this.jobs = result as []
          console.log(this.jobs)
      }
    )
  }

}
