import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MueseumWhatsOnComponent } from './mueseum-whats-on.component';

describe('MueseumWhatsOnComponent', () => {
  let component: MueseumWhatsOnComponent;
  let fixture: ComponentFixture<MueseumWhatsOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MueseumWhatsOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MueseumWhatsOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
