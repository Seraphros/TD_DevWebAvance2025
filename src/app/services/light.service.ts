import {Injectable} from '@angular/core';
import {Light} from '../models/light';

@Injectable({
	providedIn: 'root'
})
export class LightService {

	constructor() {
	}

	private lights: Light[] = [
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

	getLights(): Light[] {
		return this.lights;
	}

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
