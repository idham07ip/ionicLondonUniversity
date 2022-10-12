import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentStudentsPage } from './current-students.page';

describe('CurrentStudentsPage', () => {
  let component: CurrentStudentsPage;
  let fixture: ComponentFixture<CurrentStudentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStudentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
