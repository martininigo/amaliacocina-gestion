import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoTableComponent } from './insumo-table.component';

describe('InsumoTableComponent', () => {
  let component: InsumoTableComponent;
  let fixture: ComponentFixture<InsumoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
