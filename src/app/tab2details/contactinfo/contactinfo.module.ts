import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactinfoPageRoutingModule } from './contactinfo-routing.module';

import { ContactinfoPage } from './contactinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactinfoPageRoutingModule
  ],
  declarations: [ContactinfoPage]
})
export class ContactinfoPageModule {}
