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
              <input type="text" name="search" id="search" placeholder="filter by city" #filter>
              <button (click)="filterResult(filter.value)" type="button">Search</button>
            </form>
      </section>
      <section class="results">
        @for (houseLocation of fiterLocationList; track $index) {
          <app-housinglocation [housingLocation]="houseLocation"></app-housinglocation>
        }
      </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList:Housinglocation[] = [];
  housingService:HousingService = inject(HousingService);
  fiterLocationList:Housinglocation[] = []

  constructor() {
  this.housingService.getAllHousingLocation().then((housingLocationList:Housinglocation[]) => {
      this.housingLocationList = housingLocationList;
      this.fiterLocationList = housingLocationList;
    })
  }

  filterResult(text:string) {
    if(!text) this.fiterLocationList = this.housingLocationList;
    this.fiterLocationList = this.housingLocationList.filter((houseLocation) =>
       houseLocation?.city.toLowerCase().includes(text.toLowerCase()));
    console.log(this.fiterLocationList)
  }
}