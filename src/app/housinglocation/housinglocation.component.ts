import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" [alt]="housingLocation.name">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.state}}</p>
      <a [routerLink]="['/details',housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housinglocation.component.css'
})
export class HousinglocationComponent {

  @Input() housingLocation!:Housinglocation

}
