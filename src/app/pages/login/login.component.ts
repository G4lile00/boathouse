import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import {
  faCompass,
  faEye,
  faEyeSlash,
  faS,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;

  public eye = faEye;
  public closedEye = faEyeSlash;
  public faUser = faUser;
  public passwordType = 'password';
  public showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {
    this.formLogin = formBuilder.group({
      login: [null],
      password: [null],
    });
  }

  ngOnInit(): void {}

  public login() {
    this.service.login(this.formLogin.getRawValue()).subscribe((res) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);
    });
  }

  public togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }
}
