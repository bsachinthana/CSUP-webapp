import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipApplicationComponent } from './membership-application.component';

describe('MembershipApplicationComponent', () => {
  let component: MembershipApplicationComponent;
  let fixture: ComponentFixture<MembershipApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
