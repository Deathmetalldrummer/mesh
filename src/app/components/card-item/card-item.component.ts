import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  @ViewChild('getSize') getSize: ElementRef;

  imageSize: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.imageSize = this.getSize.nativeElement.offsetHeight;
    });
  }

}
