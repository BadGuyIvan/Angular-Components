import { Pipe, PipeTransform } from '@angular/core';
import { Products } from './products.model';

@Pipe({
  name: 'filter',
  pure: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Products[], category?: string): any {
    return category == 'All' ?
      products : products.filter(p => p.getCategory == category);
  }

}
