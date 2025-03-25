import {Injectable} from '@angular/core';
import {Light} from '../models/light';
import {ApiService} from './api.service';

@Injectable({
	providedIn: 'root'
})
export class LightService {

	private lights: Light[] = [];

	constructor(private api: ApiService) {
		this.refreshLights();
	}

	getLights(): Light[] {
		return this.lights;
	}

	refreshLights(): void {
		this.api.getLights().then((lights: any) => this.lights = lights);
	}

	addLight() {
		this.api.addLight({"name": "Lampe " + this.lights.length, "state": false})
			.catch((error: any) => {console.log(error);})
			.finally(() => this.refreshLights());
	}

	removeLight(light: Light) {
		this.api.removeLight(light)
			.catch((error: any) => {console.log(error);})
			.finally(() => this.refreshLights());
	}

	invertLight(id: Number) {
		let lightToChange = this.lights
			.filter(light => light.id === id)[0];
		lightToChange.state = !lightToChange.state;
		this.api.updateLight(lightToChange)
			.catch((error: any) => {console.log(error);})
			.finally(() => this.refreshLights());
	}

	invertAllLights() {
		this.api.invertAll().finally(() => this.refreshLights());
	}
}
