export class JobDto {
    public id : Number
    public title : String
    public description : String
    public salary : Number
    public vacancies : Number
    public availableFrom : Date
    public availableUntil : Date
    public company : String
    public industry : String
}

export class CompanyDto {
    public id : Number
    public name : String
    public industry : String
}

export class NewCompanyDto {
    public name : String
    public industryId : Number
}

export class IndustryDto {
    public id : Number
    public name : String
}