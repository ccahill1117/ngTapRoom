import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe ({
  name: "ibu",
  pure: false

})

export class IbuPipe implements PipeTransform {
  transform(input: Keg[], params) {
    if (params[1] == "allBeers") {
      return input;
    }
    else if (params[1] == "lessThanIbu") {
      var output: Keg[] = [];
      for (var i=0; i < input.length; i++) {
        if (input[i].ibu < params[0]) {
          output.push(input[i]);
        }
      }
      return output;
    }

    else if (params[1] == "greaterThanIbu") {
      var output: Keg[] = [];
      for (var i=0; i < input.length; i++) {
        if (input[i].ibu > params[0]) {
          output.push(input[i]);
        }
      }
      return output;
    }

  }
}
