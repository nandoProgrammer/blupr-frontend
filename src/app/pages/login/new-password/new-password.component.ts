import { Component, OnInit } from '@angular/core';
import  { AbstractControl, FormBuilder, FormGroup, Validators }  from  '@angular/forms';

@Component({
  selector: 'new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['../login.css', './new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  formNewPassword: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit():void {
    this.createForm()
  }

  createForm() {
    this.formNewPassword = this.formBuilder.group({
       user: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  fNewPassword(campo: string): AbstractControl{
    return this.formNewPassword.get(campo);
  }

  resetPassword():void {
    console.log(this.formNewPassword.value);
  }


}
