import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: '<h1>{{title}}</h1>' +
  '<h2>My favorite hero is {{myHero.name}}</h2><p>Heroes:</p>' +
  '<ul><li *ngFor="let hero of heroes">{{hero.name}}</li>' +
  '<p *ngIf="heroes.length > 3">There are many heroes!</p>' +
  '</ul>'
})
export class AppComponent {
  title = 'Tour of Heros';
  // myHero = 'Windstorm';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  heroes = [new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),
    new Hero(4, 'Tornado')
  ];

  myHero = this.heroes[0];
}
