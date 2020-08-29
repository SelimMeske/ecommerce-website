import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHomeSectionComponent } from './category-home-section.component';

describe('CategoryHomeSectionComponent', () => {
  let component: CategoryHomeSectionComponent;
  let fixture: ComponentFixture<CategoryHomeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryHomeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
