import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsAndEventsPage } from './news-and-events.page';

const routes: Routes = [
  {
    path: '',
    component: NewsAndEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsAndEventsPageRoutingModule {}
