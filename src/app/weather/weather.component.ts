import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@app/weather/weather.service';
import { switchMap } from 'rxjs/operators';
import { I18nService, PlaceService } from '@app/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather$ = combineLatest(this.placeService.place$, this.i18nService.language$).pipe(
    switchMap(([place, lang]) => {
      return this.weatherService.getWeather(place, this.toISO639(lang));
    }),
  );
  // en-US => en
  toISO639 = (value: string) => value.split('-')[0];

  constructor(private weatherService: WeatherService,
              private placeService: PlaceService,
              private i18nService: I18nService) {
  }

  ngOnInit() {
  }
}
