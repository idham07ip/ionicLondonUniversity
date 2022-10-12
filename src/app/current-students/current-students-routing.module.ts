import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentStudentsPage } from './current-students.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentStudentsPageRoutingModule {}
