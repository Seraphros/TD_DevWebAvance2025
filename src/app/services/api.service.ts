import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Light} from '../models/light';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(private httpClient: HttpClient) {
	}

	checkPing(): Promise<boolean> {
		return new Promise(resolve => {
			this.httpClient.get("/api/ping", {responseType: "text"})
				.subscribe({
					next: (responses: any) => {
						resolve(responses);
					},
					error: () => {
						resolve(false);
					}
				});
		});
	}

	getLights(): Promise<Light[]> {
		return new Promise(resolve => {
			this.httpClient.get("/api/light")
				.subscribe({
					next: (responses: any) => {
						resolve(responses);
					},
					error: () => {
						resolve([]);
					}
				});
		});
	}

	addLight(light: Light): Promise<Light> {
		return new Promise((resolve, reject) => {
			this.httpClient.post("/api/light", light)
				.subscribe({
					next: (response: any) => {
						resolve(response);
					},
					error: () => {
						reject();
					}
				});
		});
	}

	removeLight(light: Light): Promise<void> {
		return new Promise((resolve, reject) => {
			this.httpClient.delete("/api/light", {body: light})
				.subscribe({
					next: () => {
						resolve();
					},
					error: () => {
						reject();
					}
				});
		});
	}

	updateLight(light: Light): Promise<Light> {
		return new Promise((resolve, reject) => {
			this.httpClient.post("/api/light", light)
				.subscribe({
					next: (response: any) => {
						resolve(response);
					},
					error: () => {
						reject();
					}
				});
		});
	}

	invertAll(): Promise<Light[]> {
		return new Promise((resolve, reject) => {
			this.httpClient.post("/api/light/invertAll", {})
				.subscribe({
					next: (response: any) => {
						resolve(response);
					},
					error: () => {
						reject();
					}
				});
		});
	}
}

