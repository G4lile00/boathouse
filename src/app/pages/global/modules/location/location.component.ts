import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenRead } from 'src/app/services/token/token.read';
import { LocationService } from './services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  public locations;
  public formLocation: FormGroup;
  public id: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private token: TokenRead,

    private service: LocationService,
    private route: ActivatedRoute
  ) {
    this.formLocation = formBuilder.group({
      ds_location: [null],
    });
  }

  ngOnInit(): void {
    this.service
      .listLocation(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        console.log(res);
        this.locations = res;
      });
    this.formLocation.patchValue(this.locations);
    this.id = this.route.snapshot.paramMap.get('id');
  }

  public update() {
    const form = this.formLocation.getRawValue();

    form.id_location = parseInt(this.id);

    this.service.update(form).subscribe((res) => {
      console.log(res);
    });
  }
  public delete() {
    this.service.delete(parseInt(this.id)).subscribe((res) => {
      console.log(res);
    });
  }

  public create() {
    const form = this.formLocation.getRawValue();
    form.id_location = parseInt(this.id);

    this.service.create(form).subscribe((res) => {
      console.log(res);
    });
  }
}
