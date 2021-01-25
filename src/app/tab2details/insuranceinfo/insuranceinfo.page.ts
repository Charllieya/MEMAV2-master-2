import { Component, OnInit } from "@angular/core";
// import { Component } from '@angular/core';
import { LocalStorageService } from "../services/local-storage.service";
import { NavController } from "@ionic/angular";
import { ContactsPage } from "../contacts/contacts.page";

@Component({
  selector: "app-insuranceinfo",
  templateUrl: "./insuranceinfo.page.html",
  styleUrls: ["./insuranceinfo.page.scss"],
})
export class InsuranceinfoPage implements OnInit {
  title = "local-storage-app";
  insure = [];
  currentDisplayIndex: number = -1;
  constructor(
    private localStorageService: LocalStorageService,
    private navCtrl: NavController
  ) {}
  public id: string = "";
  public name: string = "";
  public policyNum: number = null;
  public company: string = "";
  public phone: number = null;
  public agent: string = "";
  public queryKey: string;
  public removeKey: string;
  public queryResult: string;
  public insurance = {
    id: this.id,
    name: this.name,
    policyNum: this.policyNum,
    company: this.company,
    phone: this.phone,
    agent: this.agent,
  };
  public addPerson() {
    event.preventDefault();

    this.insurance.id = JSON.stringify(localStorage.length + 1);
    this.insurance.name = this.name;
    this.insurance.policyNum = this.policyNum;
    this.insurance.company = this.company;
    this.insurance.phone = this.phone;
    this.insurance.agent = this.agent;
    this.localStorageService.setItem(
      this.insurance.id,
      JSON.stringify(this.insurance)
    );
    this.insure.push({
      id: this.id,
      name: this.name,
      policyNum: this.policyNum,
      company: this.company,
      phone: this.phone,
      agent: this.agent,
    });
    console.log(this.insure);
    this.navCtrl.navigateRoot("tabs/tab2/insurance");
    console.log("Local Storage length: " + localStorage.length);
    console.log(this.insure);
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
