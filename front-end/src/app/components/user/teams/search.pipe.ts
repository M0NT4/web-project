import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'teamNameFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val:any) => {
      let rVal = (val.Name.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}
