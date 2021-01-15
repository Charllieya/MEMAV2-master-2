import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsuranceinfoPage } from './insuranceinfo.page';

const routes: Routes = [
  {
    path: '',
    component: InsuranceinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceinfoPageRoutingModule {}
