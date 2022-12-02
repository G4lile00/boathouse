import { Component, OnInit } from '@angular/core';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  constructor(private service: LocationService) {}

  ngOnInit(): void {}
  teste() {
    this.service.login().subscribe((res) => {
      console.log(res);
    });
  }
}
