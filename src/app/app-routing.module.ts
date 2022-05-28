import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardListComponent} from "./components/card-list/card-list.component";
import {CardCreateComponent} from "./components/card-create/card-create.component";
import {CardComponent} from "./components/card/card.component";
import {CardEditComponent} from "./components/card-edit/card-edit.component";

const routes: Routes = [
  { path: '', component: CardListComponent, pathMatch: 'full' },
  { path: 'new', component: CardCreateComponent },
  { path: 'card/:id',
    children: [
      {
        path: '',
        component: CardComponent,
      },
      {
        path: 'edit',
        component: CardEditComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
