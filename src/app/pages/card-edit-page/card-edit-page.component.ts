import { Component, OnInit } from '@angular/core';
import {CardPageComponent} from "../card-page/card-page.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-card-edit-page',
  templateUrl: './card-edit-page.component.html',
  styleUrls: ['./card-edit-page.component.css', '../card-page/card-page.component.css']
})
export class CardEditPageComponent extends CardPageComponent {

  constructor(httpService: HttpService, route: ActivatedRoute, router: Router) {
    super(httpService, route, router);
  }
}
