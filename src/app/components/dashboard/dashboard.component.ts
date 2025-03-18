import { Component } from '@angular/core';
import {Light} from '../../models/light';
import {LightComponent} from '../light/light.component';
import {NgForOf} from '@angular/common';

@Component({
	selector: 'app-dashboard',
	imports: [
		LightComponent,
		NgForOf
	],
	templateUrl: './dashboard.component.html',
	standalone: true,
	styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

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

	getLightsFromState(state: boolean) {
		return this.lights.filter(light => light.state === state);
	}
}
