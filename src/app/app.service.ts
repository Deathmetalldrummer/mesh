import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, from, mergeMap, Observable, of, tap} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {HttpService} from "./http.service";
import {Card, DeleteResponse} from "./interfaces";

const url = 'http://localhost:4200/';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  cardList$: BehaviorSubject<Array<Card>> = new BehaviorSubject<Array<Card>>([]);
  _cardList$: Observable<Array<Card>> = of([]);
  constructor(private http: HttpClient, private httpService: HttpService) {
    this.init();
  }

  public init(): void {
    this.httpService.getCardList()
      .subscribe((data: Array<Card>) => this.cardList$.next([...data]));
  }

  public getCardList(): BehaviorSubject<Array<Card>> {
    return this.cardList$;
  }
  public getCard(id: number): Observable<Card> {
    return this.cardList$.pipe(
      mergeMap(data => from(data)),
      filter(item=>item.id === id)
    );
  }
  public createCard(body: Card): void {
    this.httpService.createCard(body).subscribe((data: Card) => {
      const value: Array<Card> = this.cardList$.getValue();
      value.push(data);
      this.cardList$.next(value);
    });
  }
  public editCard(body: Card): Observable<Card> {
    return this.httpService.editCard(body).pipe(
      tap((data: Card) => {
        let value: Array<Card> = this.cardList$.getValue();
        value = value.map((item: Card) => item.id === data.id ? data : item);
        this.cardList$.next(value);
      })
    );
  }
  public deleteCard(id: number): Observable<DeleteResponse> {
    return this.httpService.deleteCard(id).pipe(
      tap((data: DeleteResponse) => {
        if (data.deleted) {
          let value: Array<Card> = this.cardList$.getValue();
          value = value.filter((item: Card) => item.id !== data.id);
          this.cardList$.next(value);
        }
      })
    );
  }
}
