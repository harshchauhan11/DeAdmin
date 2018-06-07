import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { FormControl } from "@angular/forms";
import { Retailer } from "../../models/Retailer";

@IonicPage()
@Component({
  selector: "page-select-retailer",
  templateUrl: "select-retailer.html"
})
export class SelectRetailerPage {
  responseData: any;
  searchTerm: string = "";
  searchControl: FormControl;
  items: any;
  private retailers: Retailer[] = [];
  listShow = false;
  user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private viewCtrl: ViewController
  ) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SelectRetailerPage");
    this.getRetailers();
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.setFilteredItems();
    });
  }

  getRetailers() {
    this.authService.getRetailers().then(res => {
      this.responseData = res;
      console.log(JSON.stringify(this.responseData.body));
      this.retailers = JSON.parse(JSON.stringify(this.responseData.body));
      this.items = this.retailers;
      this.listShow = true;
    });
  }

  setFilteredItems() {
    this.items = this.filterItems();
  }

  filterItems() {
    if (this.searchTerm.length <= 0) this.listShow = true;
    console.log(this.searchTerm.length);
    console.log("in filterItems: ", this.searchTerm);
    return this.retailers.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
      );
    });
  }

  selectRetailer(user) {
    this.searchTerm = user.name;
    this.user = user;
    // this.listShow = false;
    this.viewCtrl.dismiss(this.user);
  }

  save() {
    this.viewCtrl.dismiss(this.user);
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
