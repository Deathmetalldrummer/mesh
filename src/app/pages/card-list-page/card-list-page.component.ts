import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Card} from "../../interfaces";
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-card-list-page',
  templateUrl: './card-list-page.component.html',
  styleUrls: ['./card-list-page.component.css']
})
export class CardListPageComponent implements OnInit {
  cardList: Observable<Array<Card>> | undefined;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.cardList = this.httpService.getCardList();
  }

}
