import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { WeatherRoutingModule } from '@app/weather/weather-routing.module';
import { SharedModule } from '@app/shared';
import { WeatherService } from '@app/weather/weather.service';
import { WeatherComponent } from './weather.component';
import { WeatherImgSrcPipe } from './pipes/weather-img-src.pipe';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    WeatherRoutingModule
  ],
  declarations: [
    WeatherComponent,
    WeatherImgSrcPipe,
    WeatherDetailComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule {
}
