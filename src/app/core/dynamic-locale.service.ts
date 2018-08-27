import { ApplicationRef, Injectable, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class DynamicLocaleService {
  private i18nPipes: PipeTransform[] = [];

  constructor(
    datePipe: DatePipe,
    private applicationRef: ApplicationRef
  ) {
    this.i18nPipes = [
      datePipe
    ];
  }

  setLocale(lang: string) {
    this.i18nPipes.forEach(pipe => {
      if (pipe.hasOwnProperty('locale')) {
        pipe['locale'] = lang;
      } else if (pipe.hasOwnProperty('_locale')) {
        pipe['_locale'] = lang;
      }
    });
    this.applicationRef.tick();
  }
}
