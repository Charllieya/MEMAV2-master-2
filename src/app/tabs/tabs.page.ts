import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
// imported Nav Controller. It is the basic navigation for tabs or navs.

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  constructor(private navCtrl: NavController) {}

  tab1() {
    this.navCtrl.navigateRoot("tabs/tab1");
    //In tab 1, which is the home time, the site is in an iframe, so route is will be under tabs/tab1, no matter where you navgivate on the site.
  }
  tab2() {
    this.navCtrl.navigateRoot("tabs/tab2");
    //In Ionic 4/5 relies on angular routing, and navigateRoot is one of the methods used to assist Ionic with dealing with different routing navagations within a tab. The line above, from my understanding sets "tabs/tab2" as the main ROOTpage of this particular time. So when a user navigates back and forth within tabs, it automatically reloads to main root page.
  }
  tab3() {
    this.navCtrl.navigateRoot("tabs/tab3");
    this.navCtrl.navigateRoot("tabs/tab4");
  }
}
