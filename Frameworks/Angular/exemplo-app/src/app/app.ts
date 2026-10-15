import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './component/home/home';
import { End } from './component/end/end';
import { Img } from './component/img/img';

@Component({
  imports: [RouterOutlet, Home, End, Img],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exemplo-app');
}
