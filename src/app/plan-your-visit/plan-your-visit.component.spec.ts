import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanYourVisitComponent } from './plan-your-visit.component';

describe('PlanYourVisitComponent', () => {
  let component: PlanYourVisitComponent;
  let fixture: ComponentFixture<PlanYourVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanYourVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanYourVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
