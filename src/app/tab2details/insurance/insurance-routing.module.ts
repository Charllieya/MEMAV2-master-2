import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InsurancePage } from "./insurance.page";

const routes: Routes = [
  {
    path: "",
    component: InsurancePage,
  },
  {
    path: "info",
    loadChildren: () =>
      import("../insuranceinfo/insuranceinfo.module").then(
        (m) => m.InsuranceinfoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsurancePageRoutingModule {}
