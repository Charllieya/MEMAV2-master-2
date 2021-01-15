import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactinfoPage } from './contactinfo.page';

describe('ContactinfoPage', () => {
  let component: ContactinfoPage;
  let fixture: ComponentFixture<ContactinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
