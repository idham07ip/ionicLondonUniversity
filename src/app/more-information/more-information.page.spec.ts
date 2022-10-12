import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreInformationPage } from './more-information.page';

describe('MoreInformationPage', () => {
  let component: MoreInformationPage;
  let fixture: ComponentFixture<MoreInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
