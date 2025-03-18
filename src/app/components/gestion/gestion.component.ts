import { Component } from '@angular/core';
import {Light} from '../../models/light';
import {LightComponent} from '../light/light.component';
import {NgForOf} from '@angular/common';

@Component({
	selector: 'app-gestion',
	imports: [
		LightComponent,
		NgForOf
	],
	templateUrl: './gestion.component.html',
	standalone: true,
	styleUrl: './gestion.component.css'
})
export class GestionComponent {

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

	addLight() {
		this.lights.push({
			id: this.lights.length,
			state: false,
			name: "Lampe " + this.lights.length
		});
	}

	removeLight(id: number) {
		this.lights = this.lights.filter(light => light.id !== id);
	}



}
