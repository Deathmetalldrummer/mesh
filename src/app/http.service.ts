import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Card, DeleteResponse} from "./interfaces";

const url = 'http://localhost:4200/'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  cardList$: BehaviorSubject<Array<Card>> = new BehaviorSubject<Array<Card>>([]);

  constructor(private http: HttpClient) {}

  public getCardList(): Observable<Array<Card>> {
    return this.http.get<Array<Card>>(`${url}card-list/`);
  }

  public getCard(id: number): Observable<Card> {
    return this.http.get<Card>(`${url}card/${id}`);
  }

  public createCard(body: Card): Observable<Card> {
    return this.http.post<Card>(`${url}card/${body.id}`, body);
  }

  public editCard(body: Card): Observable<Card> {
    return this.http.patch<Card>(`${url}card/${body.id}`, body);
  }

  public deleteCard(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(`${url}card/${id}`);
  }
}
