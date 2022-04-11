import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardListPageComponent} from "./pages/card-list-page/card-list-page.component";
import {CardPageComponent} from "./pages/card-page/card-page.component";
import {CardEditPageComponent} from "./pages/card-edit-page/card-edit-page.component";
import {CardCreatePageComponent} from "./pages/card-create-page/card-create-page.component";

const routes: Routes = [
  { path: '', component: CardListPageComponent, pathMatch: 'full' },
  { path: 'new', component: CardCreatePageComponent },
  { path: 'card/:id',
    children: [
      {
        path: '',
        component: CardPageComponent,
      },
      {
        path: 'edit',
        component: CardEditPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
