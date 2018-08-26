import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImgSrc'
})
export class WeatherImgSrcPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return null;
    }
    return `//openweathermap.org/img/w/${value}.png`;
  }

}
