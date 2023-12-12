import { Component, Host } from '@angular/core';
import { UiDirective } from "./card.directive";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  //providers:[UiDirective]
})
export class CardComponent {
 
  constructor(
    @Host() private uiDirective:UiDirective
  ){}
}
