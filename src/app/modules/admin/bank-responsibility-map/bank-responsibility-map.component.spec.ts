import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankResponsibilityMapComponent } from './bank-responsibility-map.component';

describe('BankResponsibilityMapComponent', () => {
  let component: BankResponsibilityMapComponent;
  let fixture: ComponentFixture<BankResponsibilityMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankResponsibilityMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankResponsibilityMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
