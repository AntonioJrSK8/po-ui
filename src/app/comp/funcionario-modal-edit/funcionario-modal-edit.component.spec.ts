import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioModalEditComponent } from './funcionario-modal-edit.component';

describe('FuncionarioModalEditComponent', () => {
  let component: FuncionarioModalEditComponent;
  let fixture: ComponentFixture<FuncionarioModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioModalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
