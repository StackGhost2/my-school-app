import { Routes } from '@angular/router';
import {SignIn} from './components/authentication/sign-in/sign-in';
import {SignUp} from './components/authentication/sign-up/sign-up';

export const routes: Routes = [
  {path: '', component: SignIn},
  {path: 'sign-in', component: SignIn},
  {path: 'sign-up', component: SignUp}
];
