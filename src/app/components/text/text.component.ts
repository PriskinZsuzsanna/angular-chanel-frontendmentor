import { Component } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  topic:string = 'perfume'
  title:string = 'Gabrielle Essence Eau De Parfum'
  text:string = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of '
  span:string = 'chanel'
  price1: string = '149.99'
  price2: string = '169.99'
}
