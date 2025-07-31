import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [
    FormsModule, ReactiveFormsModule, RouterLink
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  applyForm = new FormGroup({
     firstName : new FormControl('sankung'),
     lastName : new FormControl('jaiteh'),
     email : new FormControl(''),
     password: new FormControl('')
  })
}
