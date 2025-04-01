import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionInformationComponent } from './position-information.component';

describe('PositionInformationComponent', () => {
  let component: PositionInformationComponent;
  let fixture: ComponentFixture<PositionInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
