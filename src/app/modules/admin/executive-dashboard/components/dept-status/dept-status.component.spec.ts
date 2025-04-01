import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptStatusComponent } from './dept-status.component';

describe('DeptStatusComponent', () => {
  let component: DeptStatusComponent;
  let fixture: ComponentFixture<DeptStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
