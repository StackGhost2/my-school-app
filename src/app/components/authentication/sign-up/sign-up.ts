import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SignIn} from '../sign-in/sign-in';
@Component({
  selector: 'app-sign-up',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  applyForm = new FormGroup({
    firstName : new FormControl('sankung'),
    lastName : new FormControl('jaiteh'),
    email : new FormControl(''),
    password: new FormControl('')
  })

  roles = [
    { value: 'admin', label: 'Admin' },
    { value: 'Student', label: 'Student' },
    { value: 'Teacher', label: 'Teacher' }
  ];

  selectedRole = 'user'; // default

}
