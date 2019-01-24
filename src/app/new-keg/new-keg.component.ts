import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})

export class NewKegComponent {
  @Output() addKeg = new EventEmitter();

  newKeg(name: string, brand: string, price: string, pintPrice: string, alcoholContent: string, ibu: string) {
    if ( name != '' && brand != '' && price != '' && pintPrice != '' && alcoholContent != '' && ibu != '')
    {
      let newKeg: Keg = new Keg({name: name, brand: brand, price: price, pricePint: pintPrice, alcoholContent: alcoholContent, ibu: ibu});
      this.addKeg.emit(newKeg);
    }

  }
}
