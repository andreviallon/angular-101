import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // Pipe keyword that we want to use in our HTML
  name: 'summary'
})

export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) {
      return null;
    }
    const actaulLimit = (limit) ? limit : 50;
    // Returns the first 50 characters of a string where the summary pipe is used
    return value.substr(0, actaulLimit) + '...';
  }
}
