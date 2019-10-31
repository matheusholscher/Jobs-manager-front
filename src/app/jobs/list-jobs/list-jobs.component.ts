import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {

  jobs = []

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.listJobs()
  }

  listJobs(){
    this.http.get("http://localhost:8080/job").subscribe(
      (result) => {
          this.jobs = result as []
          console.log(this.jobs)
      },
      (error) => {
        alert('Error! ' + error.message)
      }
    )
  }

}
