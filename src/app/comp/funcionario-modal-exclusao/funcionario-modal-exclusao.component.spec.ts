import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioModalExclusaoComponent } from './funcionario-modal-exclusao.component';

describe('FuncionarioModalExclusaoComponent', () => {
  let component: FuncionarioModalExclusaoComponent;
  let fixture: ComponentFixture<FuncionarioModalExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioModalExclusaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioModalExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
