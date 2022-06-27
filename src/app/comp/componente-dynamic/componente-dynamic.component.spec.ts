import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDynamicComponent } from './componente-dynamic.component';

describe('ComponenteDynamicComponent', () => {
  let component: ComponenteDynamicComponent;
  let fixture: ComponentFixture<ComponenteDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
