import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificGenreComponent } from './specific-genre.component';

describe('SpecificGenreComponent', () => {
  let component: SpecificGenreComponent;
  let fixture: ComponentFixture<SpecificGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
