import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosButtonsRenderComponent } from './insumos-buttons-render.component';

describe('InsumosButtonsRenderComponent', () => {
  let component: InsumosButtonsRenderComponent;
  let fixture: ComponentFixture<InsumosButtonsRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumosButtonsRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumosButtonsRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
