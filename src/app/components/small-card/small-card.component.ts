import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {

  @Input()
    smallPhotoCover:string =""
  @Input()
    smallCardTitle:string = ""
  @Input()
    smallCardDescription:string = ""
  @Input()
  Id:string = "0"

}
