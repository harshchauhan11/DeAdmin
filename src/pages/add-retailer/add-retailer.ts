import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: "page-add-retailer",
  templateUrl: "add-retailer.html"
})
export class AddRetailerPage {
  public createRetailer: FormGroup;
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private authService: AuthServiceProvider,
    public toastCtrl: ToastController
  ) {
    this.createRetailer = formBuilder.group({
      userType: ["", Validators.required],
      uname: ["", Validators.required],
      passwd: ["", Validators.required],
      email: ["", Validators.required],
      fname: ["", Validators.required],
      lname: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddRetailerPage");
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  createUser() {
    // this.presentToast("Creating User ..");
    // console.log(this.createRetailer.value.userType);
    this.authService.addRetailerDeliverer(this.createRetailer.value).then(
      result => {
        console.log(result);
        this.responseData = result;
        if (this.responseData.status) {
          this.createRetailer.reset();
          this.presentToast("User Created Successfully !");
        }
      }
    );
  }
}
