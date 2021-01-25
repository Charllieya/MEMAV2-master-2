import { Component, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { LocalStorageService } from "../services/local-storage.service";
// import { Tab2Page } from "src/app/tab2/tab2.page";
import {
  ActivatedRoute,
  Router,
  ActivationStart,
  RouterOutlet,
} from "@angular/router";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"],
})
export class ContactsPage {
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  person: any;
  _http: any;
  requests: any;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.person = params.special;
        JSON.stringify(this.localStorageService.getItem(this.person));
      }
    });
  }
  ionViewWillEnter() {
    console.log("I just entered contacts page");
    // console.log("this.person: ", this.person);
    console.log("localStorage: ", localStorage);
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).toString().startsWith("contact_")) {
        this.person = JSON.stringify(localStorage.getItem(localStorage.key(i)));
        console.log("this.person: ", this.person);
      }
    }
  }
  ngOnDestroy() {
    console.log("The stack for tab two 'contacts' has been destroyed");
  }

  ngOnInit(): void {
    // this._http.getRequest().subscribe(res=>this.requests=res);
    this.router.events.subscribe((e) => {
      if (
        e instanceof ActivationStart &&
        e.snapshot.outlet === "administration"
      )
        this.outlet.deactivate();
    });
  }
}
