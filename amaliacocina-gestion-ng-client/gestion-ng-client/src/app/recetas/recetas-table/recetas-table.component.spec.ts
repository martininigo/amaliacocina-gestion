import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaTableComponent } from './receta-table.component';

describe('RecetaTableComponent', () => {
  let component: RecetaTableComponent;
  let fixture: ComponentFixture<RecetaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
