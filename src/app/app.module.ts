import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardItemComponent} from './components/card-item/card-item.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptor} from "./api/back.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "./components/card/card.component";
import {CardEditComponent} from "./components/card-edit/card-edit.component";
import { CardCreateComponent } from './components/card-create/card-create.component';
import { ProductPresentationComponent } from './components/product-presentation/product-presentation.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardItemComponent,
    CardComponent,
    CardEditComponent,
    CardCreateComponent,
    ProductPresentationComponent,
    CardListComponent,
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
