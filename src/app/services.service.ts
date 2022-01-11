import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  saveLoginform(loginData:any){
    return this.http.post('url', loginData)
  }
  saveSignupform(signupData:any){
    return this.http.post('url',signupData)
  }
  saveContactform(contactData:any){
    return this.http.post('url',contactData)
  }
  saveGetBooks(){
    return this.http.get('url')
  }
  saveAdminform(adminData:any){
    return this.http.post('url', adminData)
  }
  saveProfileform(profileData:any){
    return this.http.post('url', profileData)
  }
  
  
}
