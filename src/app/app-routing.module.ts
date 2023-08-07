import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD_ROUTE, INFO_ROUTE } from './constant/routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  {
    path: DASHBOARD_ROUTE,
    component: DashboardComponent
  },
  {
    path: INFO_ROUTE,
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
