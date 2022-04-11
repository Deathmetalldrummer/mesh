import { Component, OnInit } from '@angular/core';
import {Card} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../http.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  id: number | undefined;
  data: Observable<Card>;
  constructor(protected httpService: HttpService, protected route: ActivatedRoute, protected router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.initData(+this.id);
      }
    });
  }

  initData(id: number): void {
    this.data = this.httpService.getCard(id);
  }

  exit(type:string|null = null): void {
    const url = type ? `/` : `card/${this.id}`;
    this.router.navigate([url])
  }
}
