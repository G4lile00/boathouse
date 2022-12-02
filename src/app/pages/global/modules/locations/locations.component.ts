import { Component, OnInit } from '@angular/core';
import { LocationsService } from './services/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  public locations;
  constructor(private service: LocationsService) {}

  ngOnInit(): void {
    this.service.listAllLocations().subscribe((res) => {
      console.log(res);
      this.locations = res;
    });
  }
}
