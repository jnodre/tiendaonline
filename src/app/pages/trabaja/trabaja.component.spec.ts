import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaComponent } from './trabaja.component';

describe('TrabajaComponent', () => {
  let component: TrabajaComponent;
  let fixture: ComponentFixture<TrabajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
