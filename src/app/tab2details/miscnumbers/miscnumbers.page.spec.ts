import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiscnumbersPage } from './miscnumbers.page';

describe('MiscnumbersPage', () => {
  let component: MiscnumbersPage;
  let fixture: ComponentFixture<MiscnumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiscnumbersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiscnumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
