import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreInformationPageRoutingModule } from './more-information-routing.module';

import { MoreInformationPage } from './more-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreInformationPageRoutingModule
  ],
  declarations: [MoreInformationPage]
})
export class MoreInformationPageModule {}
