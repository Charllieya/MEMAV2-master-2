import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiscnumbersPage } from './miscnumbers.page';

const routes: Routes = [
  {
    path: '',
    component: MiscnumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiscnumbersPageRoutingModule {}
