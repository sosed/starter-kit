import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { WeatherInterface } from '@app/weather/models/weather.interface';

const routes = {
  city: (city: string) => `${environment.weather.api}/weather?q=${city}`
};

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  getWeather(city: string, lang: string = 'en'): Observable<WeatherInterface> {
    return this.httpClient
      .cache()
      .get<WeatherInterface>(routes.city(city), {
        params: {
          'lang': lang
        }
      });
  }
}
