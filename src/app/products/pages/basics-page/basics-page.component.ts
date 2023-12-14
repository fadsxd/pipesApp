import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLowe: string = 'micky';
  public nameUpper: string = 'MICKY';
  public nameTitle: string = 'MickY JerZy';


  public customDate: Date = new Date();
}
