import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInformationManagementComponent } from './meeting-information-management.component';

describe('MeetingInformationManagementComponent', () => {
  let component: MeetingInformationManagementComponent;
  let fixture: ComponentFixture<MeetingInformationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingInformationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingInformationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
