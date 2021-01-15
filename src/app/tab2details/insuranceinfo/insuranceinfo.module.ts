import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsuranceinfoPageRoutingModule } from './insuranceinfo-routing.module';

import { InsuranceinfoPage } from './insuranceinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsuranceinfoPageRoutingModule
  ],
  declarations: [InsuranceinfoPage]
})
export class InsuranceinfoPageModule {}
