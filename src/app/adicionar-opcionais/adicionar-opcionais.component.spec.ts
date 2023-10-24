import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarOpcionaisComponent } from './adicionar-opcionais.component';

describe('AdicionarOpcionaisComponent', () => {
  let component: AdicionarOpcionaisComponent;
  let fixture: ComponentFixture<AdicionarOpcionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarOpcionaisComponent]
    });
    fixture = TestBed.createComponent(AdicionarOpcionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
