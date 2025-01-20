import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [],
  template: `
    <section class="listng">
      <img [src]="housingLocation.photo" [alt]="housingLocation.name" class="list-image">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.state}}</p>
    </section>
  `,
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {

  @Input() housingLocation!:Housinglocation

}
