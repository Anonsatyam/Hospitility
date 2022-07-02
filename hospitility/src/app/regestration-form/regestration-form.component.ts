import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regestration-form',
  templateUrl: './regestration-form.component.html',
  styleUrls: ['./regestration-form.component.css']
})
export class RegestrationFormComponent implements OnInit {
  regestrationForm: FormGroup;
  genders: string[] = ['Male', 'Female', 'Others'];
  default: string = 'Male';

  constructor() { 
    this.regestrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      gender: new FormControl('Male', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      mobileNo: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),

    });
    this.regestrationForm.controls['gender'].setValue(this.default, {onlySelf: true});
  }

  ngOnInit(): void {
  }

  get firstName() { return this.regestrationForm.get('firstName'); }
  get lastName() { return this.regestrationForm.get('lastName'); }
  get gender() { return this.regestrationForm.get('gender'); }
  get userEmail() { return this.regestrationForm.get('userEmail'); }
  get mobileNo() { return this.regestrationForm.get('mobileNo'); }

  onSubmit(){
    alert("First Name" + " " + this.firstName?.value);
    alert("Last Name" + " " + this.lastName?.value);
    alert("Gender" + " " + this.gender?.value);
    alert("Email" + " " + this.userEmail?.value);
    alert("Mobile No" + " " + this.mobileNo?.value);
    console.log(this.firstName?.value);
    console.log(this.lastName?.value);
    console.log(this.gender?.value);
    console.log(this.userEmail?.value);
    console.log(this.mobileNo?.value);
  }

}
