import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsAndEventsPageRoutingModule } from './news-and-events-routing.module';

import { NewsAndEventsPage } from './news-and-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsAndEventsPageRoutingModule
  ],
  declarations: [NewsAndEventsPage]
})
export class NewsAndEventsPageModule {}
