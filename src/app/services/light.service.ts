import {Injectable} from '@angular/core';
import {Light} from '../models/light';

@Injectable({
	providedIn: 'root'
})
export class LightService {

	private lights: Light[] = [];
	private mocklights: Light[] = [
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


	constructor() {
		this.refreshLights();
	}

	getLights(): Light[] {
		return this.lights;
	}

	refreshLights(): void {
		new Promise(resolve => {
			resolve(this.mocklights);
		}).then((lights: any) => this.lights = lights);
	}

	addLight() {
		this.mocklights.push({
			id: this.lights.length,
			state: false,
			name: "Lampe " + this.lights.length
		});
		this.refreshLights();
	}

	removeLight(id: number) {
		this.mocklights = this.mocklights.filter(light => light.id !== id);
		this.refreshLights();
	}

	invertLight(id: number) {
		let lightToChange = this.mocklights
			.filter(light => light.id === id)[0];
		lightToChange.state = !lightToChange.state;
		this.refreshLights();
	}

	invertAllLights() {
		this.mocklights.forEach(light => light.state = !light.state);
		this.refreshLights();
	}
}
