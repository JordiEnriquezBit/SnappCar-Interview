import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCarPageComponent } from './search-car-page.component';

describe('SearchCarPageComponent', () => {
  let component: SearchCarPageComponent;
  let fixture: ComponentFixture<SearchCarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
