import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../http.service";
import {Card} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent extends CardComponent implements OnInit {
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, httpService: HttpService, router: Router, route: ActivatedRoute) {
    super(httpService, route, router);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.data$.subscribe((item:Card): void => {
      this.patchForm(item);
    });
  }

  patchForm(data:Card): void {
    this.form.patchValue({
      title: data?.title,
      price: data?.price,
      description: data?.description
    })
  }

  onSubmit(payload:Card): void {
    const _payload: Card = {...payload, ...this.form.value};
    this.httpService.editCard(_payload)
      .subscribe(() => this.router.navigate(['card/' + _payload?.id]))
  }
}
