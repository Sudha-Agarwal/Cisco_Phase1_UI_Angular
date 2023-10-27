import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServerComponent } from './product-server.component';

describe('ProductServerComponent', () => {
  let component: ProductServerComponent;
  let fixture: ComponentFixture<ProductServerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductServerComponent]
    });
    fixture = TestBed.createComponent(ProductServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
