import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaInputComponent } from './ca-input.component';

describe('CaInputComponent', () => {
  let component: CaInputComponent;
  let fixture: ComponentFixture<CaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
