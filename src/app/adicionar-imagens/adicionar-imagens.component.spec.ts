import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarImagensComponent } from './adicionar-imagens.component';

describe('AdicionarImagensComponent', () => {
  let component: AdicionarImagensComponent;
  let fixture: ComponentFixture<AdicionarImagensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarImagensComponent]
    });
    fixture = TestBed.createComponent(AdicionarImagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
