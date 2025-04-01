import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountabilityInformationManagementComponent } from './accountability-information-management.component';

describe('AccountabilityInformationManagementComponent', () => {
  let component: AccountabilityInformationManagementComponent;
  let fixture: ComponentFixture<AccountabilityInformationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountabilityInformationManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountabilityInformationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
