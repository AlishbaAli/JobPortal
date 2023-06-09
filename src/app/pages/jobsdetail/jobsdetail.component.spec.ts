import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsdetailComponent } from './jobsdetail.component';

describe('JobsdetailComponent', () => {
  let component: JobsdetailComponent;
  let fixture: ComponentFixture<JobsdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsdetailComponent]
    });
    fixture = TestBed.createComponent(JobsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
