import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsAndEventsPage } from './news-and-events.page';

describe('NewsAndEventsPage', () => {
  let component: NewsAndEventsPage;
  let fixture: ComponentFixture<NewsAndEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsAndEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsAndEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
