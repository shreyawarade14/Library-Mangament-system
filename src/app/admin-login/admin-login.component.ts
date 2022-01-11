import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private servicesservice:ServicesService, private router:Router) { }

  ngOnInit(): void {
  }
  onLoginClick(){
    if (this.adminForm.controls['username'].hasError('pattern')){
      alert('Please enter valid username ')
    }else if (this.adminForm.valid){
      this.servicesservice.saveAdminform(this.adminForm.value)
      .subscribe((resp)=>{
        console.log(resp)
      })
      console.log(this.adminForm.value)
      this.router.navigate(['/admin-dash/add-books'])
    }else{
      alert('Please enter all fields')
    }
  }

}
