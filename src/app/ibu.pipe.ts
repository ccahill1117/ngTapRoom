import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe ({
  name: "ibu",
  pure: false

})

export class IbuPipe implements PipeTransform {
  transform(input: Keg[], ibu: number, comparison: string) {
    var output: Keg[] = [];
    for (var i=0; i < input.length; i++) {
      if (input[i].ibu > ibu) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
