import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreatePageComponent } from './card-create-page.component';

describe('CardCreatePageComponent', () => {
  let component: CardCreatePageComponent;
  let fixture: ComponentFixture<CardCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
