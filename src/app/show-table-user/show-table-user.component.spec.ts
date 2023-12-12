import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTableUserComponent } from './show-table-user.component';

describe('ShowTableUserComponent', () => {
  let component: ShowTableUserComponent;
  let fixture: ComponentFixture<ShowTableUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowTableUserComponent]
    });
    fixture = TestBed.createComponent(ShowTableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
