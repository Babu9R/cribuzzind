import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedBookmakersComponent } from './recommended-bookmakers.component';

describe('RecommendedBookmakersComponent', () => {
  let component: RecommendedBookmakersComponent;
  let fixture: ComponentFixture<RecommendedBookmakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedBookmakersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedBookmakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
