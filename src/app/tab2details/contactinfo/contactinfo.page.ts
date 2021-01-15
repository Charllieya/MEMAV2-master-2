import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contactinfo",
  templateUrl: "./contactinfo.page.html",
  styleUrls: ["./contactinfo.page.scss"],
})
export class ContactinfoPage implements OnInit {
  userData = {
    firstName: "",
    lastName: "",
    relationship: "",
  };
  constructor() {
    console.log("Constuctor..");
    let contacts = [];
    let userData = JSON.parse(localStorage.getItem("userData") || "[]");
    contacts = [userData];
    contacts.push(this.userData);

    localStorage.setItem("userData", JSON.stringify(this.userData));
    console.log(JSON.stringify(userData));
    console.log(userData);

    if (localStorage.length == 0) {
      for (var i = 0; i < userData.length; i++) {
        localStorage.setItem("userData", JSON.stringify(this.userData[i]));
      }
    }
    console.log("Local Storage length: " + localStorage.length);
  }

  ngOnInit() {}

  saveData() {
    // Once the save button is pressed, remove the old name that was in the localStorage..
    // localStorage.clear();

    // Set the first/last names in localStorage, based on the input
    // localStorage.setItem(this.userData.firstName, this.userData.lastName);
    localStorage.setItem("userData", JSON.stringify(this.userData));
    console.log(JSON.stringify(this.userData));
    console.log(this.userData);

    // localStorage.setItem("userData", this.userData.lastName);
    console.log("First name: " + localStorage.key(localStorage.length));
    console.log("Last name: " + localStorage.getItem("userData"));
    console.log("Length: " + localStorage.length);
  }
}
