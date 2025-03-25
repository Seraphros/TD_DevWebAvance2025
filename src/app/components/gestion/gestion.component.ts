import {Component} from '@angular/core';
import {Light} from '../../models/light';
import {LightComponent} from '../light/light.component';
import {NgForOf} from '@angular/common';
import {LightService} from '../../services/light.service';

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


	constructor(private lightService: LightService) {}


	getLights(): Light[] {
		return this.lightService.getLights();
	}

	addLight() {
		this.lightService.addLight();
	}

	invertLight(id: Number | undefined) {
		if (id !== undefined) this.lightService.invertLight(id);
	}

	removeLight(light: Light) {
		this.lightService.removeLight(light);
	}

	invertAllLights() {
		this.lightService.invertAllLights();
	}


}
