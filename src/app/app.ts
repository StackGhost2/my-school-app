import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignIn} from './components/authentication/sign-in/sign-in';
import {SignUp} from './components/authentication/sign-up/sign-up';
import {Dashboard} from './components/admin/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignIn, SignUp, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-School-App');
}
