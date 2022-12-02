import { Component, OnInit } from '@angular/core';
import {
  faDeleteLeft,
  faRemove,
  faUser,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users = [];
  public userIcon = faUser;
  constructor(private service: UsersService) {}

  ngOnInit(): void {
    this.service.listUsers().subscribe((res) => {
      this.users = res;
      console.log(res);
    });
  }
}
