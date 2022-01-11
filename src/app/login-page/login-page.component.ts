import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router:Router, private servicesservice:ServicesService) {
   }

  ngOnInit(): void {
  }

  onLoginClick(){
    if (this.loginForm.controls['username'].hasError('pattern')){
      alert('Please enter valid username ')
    }else if (this.loginForm.valid){
      this.servicesservice.saveLoginform(this.loginForm.value)
      .subscribe((resp)=>{
        console.log(resp)
      })
      console.log(this.loginForm.value)
      this.router.navigate(['/dashboard/books'])
    }else{
      alert('Please enter all fields')
    }
  }

}
