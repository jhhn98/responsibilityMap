import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnresolvedIssuesComponent } from './unresolved-issues.component';

describe('UnresolvedIssuesComponent', () => {
  let component: UnresolvedIssuesComponent;
  let fixture: ComponentFixture<UnresolvedIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnresolvedIssuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnresolvedIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
