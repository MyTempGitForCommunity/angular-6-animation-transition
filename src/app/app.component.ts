import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animationOption1', [
      state('start', style({
        backgroundColor: 'yellow',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'green',
        width: '300px',
        height: '300px'
      })),
      transition('start => end', animate(1500)),
      transition('end => start', animate('800ms 0.5s ease-out'))
    ]),
    trigger('animationOption2', [
      state('close', style({
        opacity: 0,
        backgroundColor: 'yellow'
      })),
      state('open', style({
        opacity: 1,
        backgroundColor: 'green'
      })),
      transition('close <=> open', animate(3000)),
    ])
  ]
})
export class AppComponent {
  isMenuOpen = false;

  clickedDivState = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
