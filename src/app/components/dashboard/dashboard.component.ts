import { Component } from '@angular/core';
import {LightService} from '../../services/light.service';

@Component({
	selector: 'app-dashboard',
	imports: [
	],
	templateUrl: './dashboard.component.html',
	standalone: true,
	styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

	constructor(private lightService: LightService) {
	}

	getLightsFromState(state: boolean) {
		return this.lightService.getLights().filter(light => light.state === state);
	}
}
