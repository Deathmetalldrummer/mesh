import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../interfaces";

@Component({
  selector: 'app-product-presentation',
  templateUrl: './product-presentation.component.html',
  styleUrls: ['./product-presentation.component.css']
})
export class ProductPresentationComponent implements OnInit {
  @Input() data: Card|null;
  constructor() { }

  ngOnInit(): void {
  }
  changeMainImage(image: string) {
    if (this.data) {
      this.data.image = image;
    }
  }
}
