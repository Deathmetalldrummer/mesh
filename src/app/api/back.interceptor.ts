import { Injectable } from '@angular/core';
import {delay, Observable, of} from 'rxjs';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { data } from 'src/assets/data';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {
    if (!this.getLocal().length) {
      this.setLocal(data);
      this._data = data;
    }
  }
  _data = this.getLocal();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, body } = req;
    const id = this.getId(url);
    const conditionUrl = url.includes("localhost:4200");
    const conditionGetAll = url.includes("/card-list/") && method === "GET";
    const conditionGetById = url.includes("/card/") && method === "GET";
    const conditionPost = url.includes("/card/") && method === "POST";
    const conditionPatch = url.includes("/card/") && method === "PATCH";
    const conditionDelete = url.includes("/card/") && method === "DELETE";

    if (conditionUrl) {
      console.log('conditionUrl');
      let res = null;
      if (conditionGetAll) {
        console.log('conditionGetAll');
        res = this._data;
      }
      if (conditionGetById) {
        console.log('conditionGetById');
        res = this._data.find(item => item.id === +id) || null;
      }
      if (conditionPost) {
        console.log('conditionPost');
        const item = {id: (new Date()).getTime(), ...body};
        this._data = [...this._data, item];
        this.setLocal(this._data);
        res = body;
      }
      if (conditionPatch) {
        console.log('conditionPatch');
        const item = this._data.find(item => item.id === +id) || body;
        const newItem = {...item, ...body};
        this._data = this._data.map(item => item.id === +id ? newItem : item);
        this.setLocal(this._data);
        res = newItem;
      }
      if (conditionDelete) {
        console.log('conditionDelete');
        this._data = this._data.filter(item => item.id !== +id);
        this.setLocal(this._data);
        res = {id: +id, deleted: true};
      }
      return this.newResponse(res)
    } else {
      return next.handle(req);
    }
  }

  newResponse(body: any) {
    return of(new HttpResponse(
      { status: 200, body }
    )).pipe(delay(250));
  }
  getId(url: any) {
    const urlValues = url.split("/").filter((item: string) => item);
    return urlValues[urlValues.length - 1];
  }
  setLocal(payload: any) {
    localStorage.setItem('storage', JSON.stringify(payload));
  }
  getLocal(): Array<any> {
    return JSON.parse(localStorage.getItem('storage') || '[]');
  }
}
