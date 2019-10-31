import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobDto } from '../model/models';
import { WS_JOB } from '../utils/ws.constants';


@Injectable({
    providedIn: 'root'
})
export class JobService {
    
    constructor(private http : HttpClient){ }

    listAll() : Observable<JobDto> {
        return this.http.get<JobDto[]>(WS_JOB)
    }

}