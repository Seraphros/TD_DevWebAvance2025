import { Component } from '@angular/core';
import {LightComponent} from '../light/light.component';
import {Light} from '../../models/light';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-second-page',
  imports: [LightComponent, NgForOf],
  templateUrl: './second-page.component.html',
  standalone: true,
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

  lights: Light[] = [
    {
      id: 0,
      state: false,
      name: "Lampe 0"
    },
    {
      id: 1,
      state: true,
      name: "Lampe 1"
    },
    {
      id: 2,
      state: false,
      name: "Lampe 2"
    }
  ];

}
