import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmakersComponent } from './bookmakers.component';

describe('BookmakersComponent', () => {
  let component: BookmakersComponent;
  let fixture: ComponentFixture<BookmakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmakersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
