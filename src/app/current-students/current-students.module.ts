import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentStudentsPageRoutingModule } from './current-students-routing.module';

import { CurrentStudentsPage } from './current-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentStudentsPageRoutingModule
  ],
  declarations: [CurrentStudentsPage]
})
export class CurrentStudentsPageModule {}
