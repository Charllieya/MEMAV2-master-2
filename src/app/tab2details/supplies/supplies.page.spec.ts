import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuppliesPage } from './supplies.page';

describe('SuppliesPage', () => {
  let component: SuppliesPage;
  let fixture: ComponentFixture<SuppliesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuppliesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
