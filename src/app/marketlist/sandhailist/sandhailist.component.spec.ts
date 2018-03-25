import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandhailistComponent } from './sandhailist.component';

describe('SandhailistComponent', () => {
  let component: SandhailistComponent;
  let fixture: ComponentFixture<SandhailistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandhailistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandhailistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
