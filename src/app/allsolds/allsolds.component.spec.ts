import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsoldsComponent } from './allsolds.component';

describe('AllsoldsComponent', () => {
  let component: AllsoldsComponent;
  let fixture: ComponentFixture<AllsoldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllsoldsComponent]
    });
    fixture = TestBed.createComponent(AllsoldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
