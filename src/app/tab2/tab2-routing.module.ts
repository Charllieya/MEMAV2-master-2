import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Tab2Page } from "./tab2.page";
const routes: Routes = [
  {
    path: "",
    component: Tab2Page,
  },
  {
    path: "supplies",
    loadChildren: () =>
      import("../tab2details/supplies/supplies.module").then(
        (m) => m.SuppliesPageModule
      ),
  },
  {
    path: "contacts",
    loadChildren: () =>
      import("../tab2details/contacts/contacts.module").then(
        (m) => m.ContactsPageModule
      ),
  },
  {
    path: "places",
    loadChildren: () =>
      import("../tab2details/places/places.module").then(
        (m) => m.PlacesPageModule
      ),
  },
  {
    path: "insurance",
    loadChildren: () =>
      import("../tab2details/insurance/insurance.module").then(
        (m) => m.InsurancePageModule
      ),
  },
  {
    path: "pets",
    loadChildren: () =>
      import("../tab2details/pets/pets.module").then((m) => m.PetsPageModule),
  },
  {
    path: "misc",
    loadChildren: () =>
      import("../tab2details/miscnumbers/miscnumbers.module").then(
        (m) => m.MiscnumbersPageModule
      ),
  },
  {
    path: "share",
    loadChildren: () =>
      import("../tab2details/share/share.module").then(
        (m) => m.SharePageModule
      ),
  },
  {
    path: "",
    redirectTo: "/tabs/tab2",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
