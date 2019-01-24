import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { IbuPipe } from './ibu.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    NewKegComponent,
    IbuPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
