import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavProductListComponent } from './fav-product-list.component';

describe('FavProductListComponent', () => {
  let component: FavProductListComponent;
  let fixture: ComponentFixture<FavProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
