import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuickLinksPage } from './quick-links.page';

describe('QuickLinksPage', () => {
  let component: QuickLinksPage;
  let fixture: ComponentFixture<QuickLinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickLinksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuickLinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
