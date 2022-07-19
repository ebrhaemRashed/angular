import { Component, OnInit } from '@angular/core';
import {IUser} from "../../ViewModels/iuser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser:IUser = {} as IUser;
  registerForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.registerForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')]],
      username: ['',[Validators.required, Validators.pattern('^[A-Za-z][A-Za-z0-9_]{7,29}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      passwordConfirm: ['', [Validators.required]],
      addresses: fb.array([this.fb.control(fb.group({
        address: ['', [Validators.required, Validators.pattern('^.*[a-zA-Z0-9]+.*$')]],
        street: ['', [Validators.required, Validators.pattern('^.*[a-zA-Z0-9]+.*$')]],
        country: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
        city: ['', [Validators.required ,Validators.pattern('^[A-Za-z]+$')]]
      }))])
    });
  }

  ngOnInit(): void {
  }

  registerNewUser() {

  }

  get name(){
    return this.registerForm.get('name');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('passwordConfirm');
  }
}
