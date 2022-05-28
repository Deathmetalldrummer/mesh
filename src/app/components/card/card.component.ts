import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Card} from "../../interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id: number | undefined;
  data$: Observable<Card>;
  constructor(protected httpService: HttpService, protected route: ActivatedRoute, protected router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.initData(+this.id);
      }
    });
  }


  initData(id: number): void {
    this.data$ = this.httpService.getCard(id);
  }

  exit(type:string|null = null): void {
    const url = type ? `/` : `card/${this.id}`;
    this.router.navigate([url])
  }

  onDelete(id:number): void {
    this.data$ && this.httpService.deleteCard(id)
      .subscribe(() => this.router.navigate(['/']));
  }
}
