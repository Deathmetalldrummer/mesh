import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardItemComponent} from './components/card-item/card-item.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptor} from "./api/back.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {CardListPageComponent} from './pages/card-list-page/card-list-page.component';
import {CardEditPageComponent} from './pages/card-edit-page/card-edit-page.component';
import {CardPageComponent} from './pages/card-page/card-page.component';
import {CardComponent} from "./components/card/card.component";
import {CardEditComponent} from "./components/card-edit/card-edit.component";
import { CardCreateComponent } from './components/card-create/card-create.component';
import { CardCreatePageComponent } from './pages/card-create-page/card-create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListPageComponent,
    CardPageComponent,
    CardEditPageComponent,
    CardItemComponent,
    CardListPageComponent,
    CardEditPageComponent,
    CardPageComponent,
    CardComponent,
    CardEditComponent,
    CardCreateComponent,
    CardCreatePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
