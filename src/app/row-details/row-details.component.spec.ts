import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDetailsComponent } from './row-details.component';

describe('RowDetailsComponent', () => {
  let component: RowDetailsComponent;
  let fixture: ComponentFixture<RowDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowDetailsComponent]
    });
    fixture = TestBed.createComponent(RowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
