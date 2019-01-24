import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  kegs: Keg[] = [
    new Keg({name: "American Lager", brand: "Rainier", price: 125, pricePint: 3, alcoholContent: 4.60, ibu: 10}),
    new Keg({name: "Red Chair NWPA", brand: "Deschutes", price: 150, pricePint: 5, alcoholContent: 6.20, ibu: 60}),
    new Keg({name: "Drop Top Amber Ale", brand: "Widmer Brothers", price: 135, pricePint: 5, alcoholContent: 5.00, ibu: 20}),
    new Keg({name: "O'Doul's", brand: "Anheuser-Busch", price: 100, pricePint: 2, alcoholContent: 0.50, ibu: 5})
  ]

  pourPint(keg: Keg) {
    keg.pintsLeft -= 1;
  }

  addKeg(keg: Keg) {
    this.kegs.push(keg);
  }

}
