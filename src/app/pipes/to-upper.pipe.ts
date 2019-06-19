import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class ToUpperPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) { return []; }
    if (!searchText) { return items; }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      if (it.hasOwnProperty('name')) {
        return it.name.toLowerCase().includes(searchText);
      } else if (it.hasOwnProperty('first_name')) {
        return it.first_name.toLowerCase().includes(searchText);
      }
    });
  }
}
