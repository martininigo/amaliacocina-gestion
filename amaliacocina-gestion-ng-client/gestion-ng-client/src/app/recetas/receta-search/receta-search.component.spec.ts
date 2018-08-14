import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaSearchComponent } from './receta-search.component';

describe('RecetaSearchComponent', () => {
  let component: RecetaSearchComponent;
  let fixture: ComponentFixture<RecetaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
