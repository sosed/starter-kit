import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { I18nService } from '@app/core';

@Pipe({
  name: 'localizedDate',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {

  constructor(private i18nService: I18nService) {
  }

  transform(value: any, pattern: string = 'mediumDate'): any {
    const datePipe: DatePipe = new DatePipe(this.i18nService.language);
    return datePipe.transform(value, pattern);
  }

}
