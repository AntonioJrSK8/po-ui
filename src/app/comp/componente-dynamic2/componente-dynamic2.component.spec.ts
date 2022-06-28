import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDynamic2Component } from './componente-dynamic2.component';

describe('ComponenteDynamic2Component', () => {
  let component: ComponenteDynamic2Component;
  let fixture: ComponentFixture<ComponenteDynamic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDynamic2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDynamic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
