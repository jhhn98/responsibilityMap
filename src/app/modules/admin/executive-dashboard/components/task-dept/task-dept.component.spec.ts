import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeptComponent } from './task-dept.component';

describe('TaskDeptComponent', () => {
  let component: TaskDeptComponent;
  let fixture: ComponentFixture<TaskDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDeptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
