import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentApprovalComponent } from './rent-approval.component';

describe('RentApprovalComponent', () => {
  let component: RentApprovalComponent;
  let fixture: ComponentFixture<RentApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
