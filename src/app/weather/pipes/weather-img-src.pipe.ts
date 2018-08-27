import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({
  name: 'weatherImgSrc'
})
export class WeatherImgSrcPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return null;
    }
    return `${environment.weather.iconUrl}/${value}.png`;
  }

}
