import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '@env/environment';

const placeKey = '_place';

@Injectable()
export class PlaceService {

  place$ = new BehaviorSubject<string>('');

  constructor() {
    this.place = '';
    this.place$.subscribe((place) => {
      localStorage.setItem(placeKey, place);
    });
  }

  set place(place: string) {
    place = place || localStorage.getItem(placeKey) || environment.defaultGeo;
    this.place$.next(place);
  }

  get place(): string  {
    return this.place$.getValue();
  }
}
