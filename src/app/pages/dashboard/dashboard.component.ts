import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { INFO_ROUTE } from 'src/app/constant/routes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private router: Router
  ){}

  onInfo() {
    this.router.navigate([INFO_ROUTE]);
  }
}
