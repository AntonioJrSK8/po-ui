import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioModalPouiComponent } from './funcionario-modal-poui.component';

describe('FuncionarioModalPouiComponent', () => {
  let component: FuncionarioModalPouiComponent;
  let fixture: ComponentFixture<FuncionarioModalPouiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioModalPouiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioModalPouiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
