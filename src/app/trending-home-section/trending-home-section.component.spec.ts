import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingHomeSectionComponent } from './trending-home-section.component';

describe('TrendingHomeSectionComponent', () => {
  let component: TrendingHomeSectionComponent;
  let fixture: ComponentFixture<TrendingHomeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingHomeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
