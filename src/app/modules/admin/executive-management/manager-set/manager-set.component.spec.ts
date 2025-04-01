import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSetComponent } from './manager-set.component';

describe('ManagerSetComponent', () => {
  let component: ManagerSetComponent;
  let fixture: ComponentFixture<ManagerSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
