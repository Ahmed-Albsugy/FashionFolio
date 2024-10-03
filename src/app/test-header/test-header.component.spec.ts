import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHeaderComponent } from './test-header.component';

describe('TestHeaderComponent', () => {
  let component: TestHeaderComponent;
  let fixture: ComponentFixture<TestHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHeaderComponent]
    });
    fixture = TestBed.createComponent(TestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
