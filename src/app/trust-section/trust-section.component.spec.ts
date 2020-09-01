import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustSectionComponent } from './trust-section.component';

describe('TrustSectionComponent', () => {
  let component: TrustSectionComponent;
  let fixture: ComponentFixture<TrustSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
