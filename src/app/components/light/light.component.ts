import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-light',
  imports: [
    NgClass
  ],
  templateUrl: './light.component.html',
  standalone: true,
  styleUrl: './light.component.css'
})
export class LightComponent {

  @Input() name: string = "";
  @Input() state: boolean = false;
  @Output() change: EventEmitter<void> = new EventEmitter();

}
