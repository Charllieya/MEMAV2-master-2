import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactinfoPage } from './contactinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ContactinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactinfoPageRoutingModule {}
