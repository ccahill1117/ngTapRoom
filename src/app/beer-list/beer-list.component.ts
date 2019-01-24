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

  pourPint(keg: Keg) {
    this.pintEmitter.emit(keg);
  }

}
