import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  template: `
    <div *ngFor="let car of Cars" [ngSwitch]="car.color">
      <div *ngSwitchCase="'blue'" class="blue">
        {{ car.name }} ({{ car.color }})
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'AngularBasics';
}
