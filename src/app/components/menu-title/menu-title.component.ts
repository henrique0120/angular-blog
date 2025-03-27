import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  standalone: false,
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css', './menu-title.responsive.component.css']
})
export class MenuTitleComponent {
    @Input()
    titleNews:string = ""
    @Input()
    newsDesc: string = ""

    constructor(){}
}
