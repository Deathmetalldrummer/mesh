import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() data: any;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

}
