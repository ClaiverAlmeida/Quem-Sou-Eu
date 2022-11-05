import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaButtonComponent } from './ca-button.component';

describe('CaButtonComponent', () => {
  let component: CaButtonComponent;
  let fixture: ComponentFixture<CaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
