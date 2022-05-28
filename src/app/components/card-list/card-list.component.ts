import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Card} from "../../interfaces";
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cardList: Observable<Array<Card>> | undefined;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.cardList = this.httpService.getCardList();
  }

}
