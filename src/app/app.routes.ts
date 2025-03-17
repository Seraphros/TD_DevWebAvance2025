import {Routes} from '@angular/router';
import {FirstPageComponent} from './components/first-page/first-page.component';
import {SecondPageComponent} from './components/second-page/second-page.component';

export const routes: Routes = [
  {path: "first", component: FirstPageComponent},
  {path: "second", component: SecondPageComponent},
  {path: "**", redirectTo: "second"}
];
