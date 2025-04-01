import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpmCheckDepartmentComponent } from './ipm-check-department.component';

describe('IpmCheckDepartmentComponent', () => {
  let component: IpmCheckDepartmentComponent;
  let fixture: ComponentFixture<IpmCheckDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpmCheckDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpmCheckDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
