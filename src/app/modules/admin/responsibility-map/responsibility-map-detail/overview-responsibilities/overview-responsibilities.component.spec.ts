import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewResponsibilitiesComponent } from './overview-responsibilities.component';

describe('OverviewResponsibilitiesComponent', () => {
  let component: OverviewResponsibilitiesComponent;
  let fixture: ComponentFixture<OverviewResponsibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewResponsibilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewResponsibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
