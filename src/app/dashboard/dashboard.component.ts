import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}

  create(): void {
    this.router.navigate(['/dashboard/new']);
  }
}
