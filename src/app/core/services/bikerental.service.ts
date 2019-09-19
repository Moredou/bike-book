import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BikeRentalService{

    constructor(
        private http: HttpClient
    ){}
    
    getBikes():Observable<any>{
        return this.http.get('/assets/fakedata/bikerentals.json');
    }

    

    }
