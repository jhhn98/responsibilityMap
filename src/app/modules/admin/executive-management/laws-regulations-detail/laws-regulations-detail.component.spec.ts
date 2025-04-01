import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsRegulationsDetailComponent } from './laws-regulations-detail.component';

describe('LawsRegulationsDetailComponent', () => {
  let component: LawsRegulationsDetailComponent;
  let fixture: ComponentFixture<LawsRegulationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawsRegulationsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawsRegulationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
