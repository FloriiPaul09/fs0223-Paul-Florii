import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  name:string= '';
  alterEgo:string= '';
  power:string= '';
  enemy:string= '';
  planet:string= '';
  weakness:string= '';
}
