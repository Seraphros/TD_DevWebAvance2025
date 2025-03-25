import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-navbar',
	imports: [
		RouterLink,
		RouterLinkActive,
		NgIf
	],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

	apiState: boolean = false;

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.api.checkPing().then(state => this.apiState = state);
	}

}
