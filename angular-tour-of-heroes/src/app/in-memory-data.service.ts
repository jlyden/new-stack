import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dasher' },
      { id: 12, name: 'Dancer' },
      { id: 13, name: 'Prancer' },
      { id: 14, name: 'Vixen' },
      { id: 15, name: 'Comet' },
      { id: 16, name: 'Cupid' },
      { id: 17, name: 'Donner' },
      { id: 18, name: 'Blitzen' },
      { id: 19, name: 'Rudolph' },
      { id: 20, name: 'Olive' }
    ];
    return {heroes};
  }

  // Overrides genId method so hero always has id.
  // If heroes array is empty, method below returns intial number (11).
  // If heroes array not empty, method below returns highest heroId + 1.
  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
