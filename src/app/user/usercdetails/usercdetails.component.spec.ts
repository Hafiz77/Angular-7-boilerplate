import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercdetailsComponent } from './usercdetails.component';

describe('UsercdetailsComponent', () => {
  let component: UsercdetailsComponent;
  let fixture: ComponentFixture<UsercdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
