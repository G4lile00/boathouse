import { Component, OnInit } from '@angular/core';
import {
  faBuilding,
  faMapLocationDot,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent implements OnInit {
  public user = faUser;
  public company = faBuilding;
  public location = faMapLocationDot;
  constructor() {}

  ngOnInit() {}
}
