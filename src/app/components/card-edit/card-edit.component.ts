import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../http.service";
import {Card} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.css']
})
export class CardEditComponent implements OnInit {
  @Input() data: Card | null;

  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.data = changes['data'].currentValue;
    this.patchForm();
  }
  patchForm(): void {
    this.form.patchValue({
      title: this.data?.title,
      price: this.data?.price,
      description: this.data?.description
    })
  }

  onSubmit(): void {
    const payload: Card = {...this.data, ...this.form.value};
    this.httpService.editCard(payload)
      .subscribe(() => this.router.navigate(['card/' + this.data?.id]))
  }

  onDelete(): void {
      this.data && this.httpService.deleteCard(this.data.id)
        .subscribe(() => this.router.navigate(['/']))
  }
}
