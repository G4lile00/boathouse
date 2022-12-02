import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  public company;
  constructor(private service: CompanyService) {}

  ngOnInit(): void {
    this.service.listCompany().subscribe((res) => {
      this.company = res;
      console.log(res);
    });
  }
}
