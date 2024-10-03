import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartComponent } from './shoping-cart.component';

describe('ShopingCartComponent', () => {
  let component: ShopingCartComponent;
  let fixture: ComponentFixture<ShopingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopingCartComponent]
    });
    fixture = TestBed.createComponent(ShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
