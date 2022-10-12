import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlumniAndSupportersPage } from './alumni-and-supporters.page';

describe('AlumniAndSupportersPage', () => {
  let component: AlumniAndSupportersPage;
  let fixture: ComponentFixture<AlumniAndSupportersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumniAndSupportersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlumniAndSupportersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
