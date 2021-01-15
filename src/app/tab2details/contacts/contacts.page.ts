import { Component } from "@angular/core";
// import { NavController } from "ionic-angular";
import { Tab2Page } from "src/app/tab2/tab2.page";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"],
})
export class ContactsPage {
  constructor() {}
  ionViewWillEnter() {
    console.log("I just entered contacts page");
  }
  ngOnDestroy() {
    console.log("The stack for tab two 'contacts' has been destroyed");
  }
}
