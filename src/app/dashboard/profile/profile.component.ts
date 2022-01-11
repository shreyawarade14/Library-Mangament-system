import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profileForm= new FormGroup({
  firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
  contactno:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  address:new FormControl('',[Validators.required]),

});
  constructor(private servicesservice:ServicesService) { }

  ngOnInit(): void {
  }
  onSubmitClick(){
    if (this.profileForm.controls['email'].hasError('pattern')){
      alert('Please enter valid email ')
    }else if (this.profileForm.valid){
      this.servicesservice.saveLoginform(this.profileForm.value)
      .subscribe((resp)=>{
        console.log(resp)
      })
    console.log(this.profileForm.value)
    }else{
    alert('Please enter all fields')
  }
}
}

