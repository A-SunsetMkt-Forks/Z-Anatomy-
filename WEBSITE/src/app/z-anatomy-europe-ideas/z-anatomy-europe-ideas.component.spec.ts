import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZAnatomyEuropeIdeasComponent } from './z-anatomy-europe-ideas.component';

describe('ZAnatomyEuropeIdeasComponent', () => {
  let component: ZAnatomyEuropeIdeasComponent;
  let fixture: ComponentFixture<ZAnatomyEuropeIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZAnatomyEuropeIdeasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZAnatomyEuropeIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
