import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusImplementationComponent } from './status-implementation.component';

describe('StatusImplementationComponent', () => {
  let component: StatusImplementationComponent;
  let fixture: ComponentFixture<StatusImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusImplementationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
