import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe ({
  name: "ibu",
  pure: false

})

export class IbuPipe implements PipeTransform {
  transform(input: Keg[]) {
    var output: Keg[] = [];
    for (var i=0; i < input.length; i++) {
      if (input[i].ibu > 10) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
