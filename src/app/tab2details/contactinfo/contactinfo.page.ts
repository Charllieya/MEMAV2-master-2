import { Component, OnInit } from "@angular/core";
// import { Component } from '@angular/core';
import { LocalStorageService } from "../services/local-storage.service";
import { NavController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";
import { ContactsPage } from "../contacts/contacts.page";
@Component({
  selector: "app-contactinfo",
  templateUrl: "./contactinfo.page.html",
  styleUrls: ["./contactinfo.page.scss"],
})
export class ContactinfoPage implements OnInit {
  title = "local-storage-app";
  contacts = [];
  currentDisplayIndex: number = -1;
  constructor(
    private localStorageService: LocalStorageService,
    private navCtrl: NavController,
    private router: Router
  ) {}
  public id: string = "";
  public firstname: string = "";
  public lastname: string = "";
  public age: number = null;
  public queryKey: string;
  public removeKey: string;
  public queryResult: string;
  public person = {
    id: this.id,
    firstName: this.firstname,
    lastName: this.lastname,
    age: this.age,
  };
  public addPerson() {
    event.preventDefault();

    this.person.id = "contact_" + JSON.stringify(localStorage.length + 1);
    // this.person.id = JSON.stringify(localStorage.length + 1);
    this.person.firstName = this.firstname;
    this.person.age = this.age;
    this.person.lastName = this.lastname;
    localStorage.setItem(this.person.id, JSON.stringify(this.person));
    this.localStorageService.setItem(
      this.person.id,
      JSON.stringify(this.person)
    );
    this.contacts.push({
      id: this.id,
      firstName: this.firstname,
      lastName: this.lastname,
      age: this.age,
    });
    console.log(this.contacts);
    // this.navCtrl.navigateRoot("tabs/tab2/contacts");
    console.log("Local Storage length: " + localStorage.length);
    console.log("LocalStorage: ", localStorage);
    // console.log("this.person: ", this.person);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: this.person,
      },
    };
    this.router.navigate(["tabs/tab2/contacts"], navigationExtras);
  }
  public getPerson(nameToRemove: string) {
    this.queryResult = this.localStorageService.getItem(nameToRemove);
  }
  public deletePerson(nameToDelete: string) {
    this.localStorageService.removeItem(nameToDelete);
  }
  public reset() {
    this.localStorageService.clear();
  }

  ngOnInit() {}
}
