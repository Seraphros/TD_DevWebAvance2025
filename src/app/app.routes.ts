import {Routes} from '@angular/router';
import {GestionComponent} from './components/gestion/gestion.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "gestion", component: GestionComponent},
  {path: "**", redirectTo: "dashboard"}
];
