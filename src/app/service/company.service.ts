import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CompanyDto, NewCompanyDto } from '../model/models';
import { WS_COMPANY } from '../utils/ws.constants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CompanyService{

    constructor(private http : HttpClient) { }

    listAll() : Observable<CompanyDto[]> {
        return this.http.get<CompanyDto[]>(WS_COMPANY)
    }

    save(company : NewCompanyDto) : Observable<any> {
        return this.http.post<NewCompanyDto>(WS_COMPANY, company)
    }
}