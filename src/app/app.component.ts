import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // template: `
  //   <div *ngFor="let car of Cars" [ngSwitch]="car.color">
  //     <div *ngSwitchCase="'blue'" class="blue">
  //       {{ car.name }} ({{ car.color }})
  //     </div>
  //     <div *ngSwitchCase="'yellow'" class="yellow">
  //       {{ car.name }}  ({{car.color}})
  //     </div>
  //     <div *ngSwitchCase="'silver'" class="silver">
  //       {{ car.name }}  ({{car.color}})
  //     </div>
  //     <div *ngSwitchCase="'red'" class="red">
  //       Age:{{car.age}} Car:{{ car.name }}  Color:({{car.color}})
  //     </div>

  //     <div *ngSwitchDefault class="text-warning">
  //       {{ car.name }} ({{ car.color}})
  //     </div>
  //   </div>
  // `
})
export class AppComponent {
  title = 'AngularBasics';

  Cars: any[] = [
    {
      name: 'BMW',
      avarage: 12,
      color: 'blue'
    },
    {
      name: 'Ford',
      avarage: 15,
      color: 'silver'
    },
    {
      name: 'Suzuki',
      age: 18,
      color: 'blue'
    },
    {
      name: 'MG Hector',
      age: 14,
      color: 'red'
    },
    {
      name: 'Jaguar',
      age: 8,
      color: 'green'
    }
  ];
}
