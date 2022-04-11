import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from "../../http.service";
import {Router} from "@angular/router";
import {Card} from "../../interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: Card|null;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.data && this.httpService.deleteCard(this.data.id)
      .subscribe(() => this.router.navigate(['/']));
  }
}
