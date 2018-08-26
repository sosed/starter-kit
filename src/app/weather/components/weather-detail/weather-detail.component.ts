import { Component, Input, OnInit } from '@angular/core';
import { WeatherInterface } from '@app/weather/models/weather.interface';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {

  @Input() weather: WeatherInterface;

  constructor() { }

  ngOnInit() {
  }

}
