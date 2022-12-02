import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { TokenInterceptor } from 'src/app/services/token/token.interceptor';
import { TokenRead } from 'src/app/services/token/token.read';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private router: Router,
    private token: TokenRead
  ) {
    this.formLogin = formBuilder.group({
      name: [null],
      password: [null],
    });
  }

  ngOnInit(): void {}

  public update() {
    const form = this.formLogin.getRawValue();

    this.service.update(form).subscribe((res) => {
      console.log(res);
    });
  }
  public delete() {
    this.service.delete().subscribe((res) => {
      console.log(res);
    });
  }
}
