import { Component, inject } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  template: `
      <section>
            <form>
              <input type="text" name="search" id="search" placeholder="filter by city">
              <button type="button">Search</button>
            </form>
      </section>
      <section class="results">
        @for (houseLocation of housingLocationList; track $index) {
          <app-housinglocation [housingLocation]="houseLocation"></app-housinglocation>
        }
      </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList:Housinglocation[] = [];
  housingService:HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
  }
}