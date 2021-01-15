import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiscnumbersPageRoutingModule } from './miscnumbers-routing.module';

import { MiscnumbersPage } from './miscnumbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiscnumbersPageRoutingModule
  ],
  declarations: [MiscnumbersPage]
})
export class MiscnumbersPageModule {}
