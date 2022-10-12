import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreInformationPage } from './more-information.page';

const routes: Routes = [
  {
    path: '',
    component: MoreInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreInformationPageRoutingModule {}
