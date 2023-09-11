import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailbackendService {

  private baseUrl:string="http://localhost:4200"

  constructor(private http:HttpClient) { }

  sendEmail(data:any)
  {
   return this.http.post(`${this.baseUrl}/sendEmail`,data);
  }
}
