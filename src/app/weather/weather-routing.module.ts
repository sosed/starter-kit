import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { WeatherComponent } from '@app/weather/weather.component';

const routes: Routes = [
  Route.withShell([
    {path: '', redirectTo: '/weather', pathMatch: 'full'},
    {path: 'weather', component: WeatherComponent, data: {title: extract('Weather')}}
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WeatherRoutingModule {
}
