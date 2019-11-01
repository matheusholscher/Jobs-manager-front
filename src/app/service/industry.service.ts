import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CompanyDto, IndustryDto } from '../model/models';
import { WS_COMPANY, WS_INDUSTRY } from '../utils/ws.constants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class IndustryService{

    constructor(private http : HttpClient) { }

    listAll() : Observable<IndustryDto[]> {
        return this.http.get<IndustryDto[]>(WS_INDUSTRY)
    }
}