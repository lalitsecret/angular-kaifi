import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'column'
})
export class ColumnPipe implements PipeTransform {

  transform(a,str): any {
    return a.filter((x:any)=>x.tags.startsWith(str));
  }

}