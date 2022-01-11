import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobno: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    Details:new FormControl('', [Validators.required])
  });
  constructor(private servicesservice:ServicesService) { }

  ngOnInit(): void {
  }
  onSubmitClick(){
    if (this.contactForm.controls['mobno'].hasError('pattern')){
      alert('Please enter valid mobile no ')
    }else if (this.contactForm.valid){
      this.servicesservice.saveLoginform(this.contactForm.value)
      .subscribe((resp)=>{
        console.log(resp)
      })
    console.log(this.contactForm.value)
    }else{
    alert('Please enter all fields')
  }
}
  


}
