import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css']
})
export class CardCreateComponent implements OnInit {
  form: FormGroup = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router) {}
  ngOnInit(): void {}

  onSubmit(): void {
    this.httpService.createCard(this.form.value)
      .subscribe(() => this.router.navigate(['/']));
  }
}
