import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumniAndSupportersPageRoutingModule } from './alumni-and-supporters-routing.module';

import { AlumniAndSupportersPage } from './alumni-and-supporters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumniAndSupportersPageRoutingModule
  ],
  declarations: [AlumniAndSupportersPage]
})
export class AlumniAndSupportersPageModule {}
