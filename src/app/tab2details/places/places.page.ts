import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-places",
  templateUrl: "./places.page.html",
  styleUrls: ["./places.page.scss"],
})
export class PlacesPage implements OnInit {
  public input: string = "";
  public title: string = "";
  public name: string = "";
  emergencyPlace = [
    {
      title: "INDOOR",
      name:
        "If you live in an area where tornadoes, hurricanes, or other high-wind storms can happen, make sure everyone knows where to go for protection. This could be a small, interior, windowless room, such as a closet or bathroom, on the lowest level of sturdy building, or a tornado safe room or storm shelter.",
      input: this.input,
    },
    {
      title: "NEIGHBORHOOD",
      name:
        "This is a place in your neighborhood where your household members will meet if there is a fire or other emergency and you need to leave your home. The meeting place could be a big tree, a mailbox at the end of the driveway, or a neighbor's house.",
      input: this.input,
    },
    {
      title: "OUT-OF-NEIGHBORHOOD",
      name:
        "This is a place where your family will meet if a diaster happens when you're not at home and you can't get back to your home. This could be a library, community center, house of worship, or family friend's home",
      input: this.input,
    },
    {
      title: "OUT-OF-TOWN",
      name:
        "Having an out-of-town meeting place can help you reunite if a diaster happens and you cannot get home or to your out-of-neighborhood meeting place; or your family is not together and your community is instructed to evacuate the area. This meeting place could be the home of a relative or family friend. Make sure everyone knows the address of the meeting place and dicuss ways you could get there.",
      input: this.input,
    },
  ];
  constructor(private navCtrl: NavController) {
    // Called first time before the ngOnInit()
    var myArr = [];
    console.log("constructor()... ");
    // If localStorage has not been initialized, then initialize it by setting them all to false.
    if (localStorage.length == 0) {
      for (var i = 0; i < this.emergencyPlace.length; i++) {
        localStorage.setItem(
          this.emergencyPlace[i].name,
          this.emergencyPlace[i].input
        );
      }
    }
    console.log("Local Storage: " + localStorage.length);
  }

  ionViewWillEnter() {
    //Load the emergencyItems from localStorage
    console.log("I just entered the supplies page");
    // console.log(this.emergencyItem);
    // Iterating through the localStorage to get the "true"/"false" boolean.
    for (var i = 0; i < this.emergencyPlace.length; i++) {
      // When true, set emergency items to true. If false, set emergency items to false. Has to use "startsWith", because the value in localStorage is actually a string. Couldn't find a "toBoolean()" method.
      this.emergencyPlace[i].input = localStorage.getItem(
        this.emergencyPlace[i].name
      );
    }
    // console.log(localStorage);
  }

  ionViewWillLeave() {
    //Set the emergencyItems into localStorage
    // The "checked" flags could have changed from "false". Need to set them if so.
    for (var i = 0; i < this.emergencyPlace.length; i++) {
      localStorage.getItem(this.emergencyPlace[i].name);
    }
    console.log("I just left the supplies page");
    // console.log(this.emergencyItem);
    console.log(localStorage);
  }

  onClick(emergencyPlace) {
    // Clicking an emergencyItem changes the "checked" flag. Need to change it in storage.
    // if (localStorage.getItem(emergencyItem.name) == "false")
    // localStorage.setItem(emergencyItem.name, "true");
    // else localStorage.setItem(emergencyItem.name, "false");
    for (var i = 0; i < emergencyPlace.length; i++) {
      localStorage.setItem(emergencyPlace[i].name, emergencyPlace[i].input);
    }
    // localStorage.setItem(emergencyPlace.name, emergencyPlace.input);
    // console.log("Local: " + localStorage.getItem(emergencyItem.name));
    console.log("Emergency place: ", emergencyPlace);
    console.log("Local storage: ", localStorage);
    this.navCtrl.navigateRoot("tabs/tab2");
  }

  ngOnInit() {}
}
