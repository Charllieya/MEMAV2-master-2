import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactsPage } from "./contacts.page";

const routes: Routes = [
  {
    path: "",
    component: ContactsPage,
  },
  {
    path: "info",
    loadChildren: () =>
      import("../contactinfo/contactinfo.module").then(
        (m) => m.ContactinfoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
