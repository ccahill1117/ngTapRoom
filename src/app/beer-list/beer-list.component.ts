import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model'


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent {
  @Input() kegList: Keg[];
  @Output() pintEmitter = new EventEmitter();

  filterIbu: number = 10;
  filterComparison: string = 'allBeers';

  pourPint(keg: Keg) {
    this.pintEmitter.emit(keg);
  }

  onComparisonChange(optionFromMenu) {
    this.filterComparison = optionFromMenu;
  }

  onIBUChange(valueFromInput) {
    this.filterIbu = parseInt(valueFromInput);
  }

}
