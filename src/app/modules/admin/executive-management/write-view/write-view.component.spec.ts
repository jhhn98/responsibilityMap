import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteViewComponent } from './write-view.component';

describe('WriteViewComponent', () => {
  let component: WriteViewComponent;
  let fixture: ComponentFixture<WriteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriteViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
