import { Component } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  src:string = "../../../assets/images/image-product-mobile.jpg"
  srcDesktop:string = "../../../assets/images/image-product-desktop.jpg"
}
