import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get("https://randomuser.me/api/?results=50");
  }
}
