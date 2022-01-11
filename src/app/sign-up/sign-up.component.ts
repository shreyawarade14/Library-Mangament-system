import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  });

  constructor(private servicesservice:ServicesService) { }

  ngOnInit(): void {
  }
  onSignupSubmit(){
    if (this.signupForm.controls['email'].hasError('pattern')){
      alert('Please enter valid email address')
    }else if (this.signupForm.valid){
      this.servicesservice.saveSignupform(this.signupForm.value)
      .subscribe((resp)=>{
        console.log(resp)
      })
      console.log(this.signupForm.value)
    }else{
      alert('Please enter all fields')

}
}

}

