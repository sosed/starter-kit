import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * Prefixes requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('openweathermap.org')) {
      request = request.clone({
        url: request.url,
        params: request.params
          .set('appid', environment.weather.appId)
          .set('units', environment.weather.units)
      });
    } else {
      request = request.clone({url: environment.serverUrl + request.url});
    }
    return next.handle(request);
  }

}
