import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ToastController,
  Platform
} from "ionic-angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
// import { FilePath } from "@ionic-native/file-path";
import { Camera, CameraOptions } from "@ionic-native/camera";
import * as apiCalls from "../../providers/api-service/api-calls";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Geolocation } from "@ionic-native/geolocation";
import { LocationAccuracy } from "@ionic-native/location-accuracy";

@IonicPage()
@Component({
  selector: "page-add-store",
  templateUrl: "add-store.html"
})
export class AddStorePage {
  public createStoreForm: FormGroup;
  imageURI: any;
  imageFileName: any;
  imageFilePathRemote = "";
  storeName: any;
  storeLocation: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private transfer: FileTransfer,
    // private file: File,
    // private filePath: FilePath,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public platform: Platform,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy
  ) {
    this.createStoreForm = formBuilder.group({
      retailerType: ["", Validators.required],
      storeName: ["", Validators.required],
      passwd: ["", Validators.required],
      email: ["", Validators.required],
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      storePhoto: [""],
      latLng: [""]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddStorePage");
    if (this.storeName != null) {
      console.log(
        this.storeName.toLowerCase().replace(/ /g, "_") + new Date().getTime()
      );
      // this.imageFileName = this.storeName.toLowerCase().replace(/ /g,"_") + new Date().getTime();
    }
  }

  enableLocation() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy
          .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
          .then(
            () => alert("Request successful"),
            error =>
              alert(
                "Error requesting location permissions" + JSON.stringify(error)
              )
          );
      }
    });
  }

  getCurrentLocation(event: Event) {
    event.stopPropagation();
    this.enableLocation();
    
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.storeLocation =
          resp.coords.latitude + ", " + resp.coords.longitude;
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  setImageName() {
    console.log("In setImageName.");
    this.imageFileName =
      this.storeName.toLowerCase().replace(/ /g, "_") + new Date().getTime();
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      /*destinationType: this.camera.DestinationType.FILE_URI,*/
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetHeight: 300,
      targetWidth: 300
    };

    this.camera.getPicture(options).then(
      imageData => {
        let base64Image = "data:image/jpeg;base64," + imageData;
        console.log(base64Image);
        this.imageURI = base64Image;
        console.log(this.imageURI);
      },
      err => {
        console.log(err);
        this.presentToast(err);
      }
    );
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      /*destinationType: this.camera.DestinationType.FILE_URI,*/
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then(
      imageData => {
        let base64Image = "data:image/jpeg;base64," + imageData;
        console.log(base64Image);
        this.imageURI = base64Image;
        console.log(this.imageURI);
      },
      err => {
        console.log(err);
        this.presentToast(err);
      }
    );
  }

  uploadFile() {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: "fileToUpload",
      fileName: this.imageFileName + ".jpg",
      chunkedMode: false,
      httpMethod: "post",
      mimeType: "multipart/form-data",
      // params: { fileName: "am" },
      headers: {}
    };

    fileTransfer.upload(this.imageURI, apiCalls.addPhotoAPI, options).then(
      data => {
        console.log(JSON.stringify(data));
        console.log("Uploaded Successfully");
        this.imageFilePathRemote =
          apiCalls.PhotosURI + "/" + this.imageFileName + ".jpg";
        loader.dismiss();
        this.presentToast("Image uploaded successfully");
      },
      err => {
        console.log(err);
        loader.dismiss();
        this.presentToast(err);
      }
    );
  }

  // public takePicture(sourceType) {
  //   // Create options for the Camera Dialog
  //   var options = {
  //     quality: 100,
  //     sourceType: sourceType,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true
  //   };

  //   // Get the data of an image
  //   this.camera.getPicture(options).then((imagePath) => {
  //     // Special handling for Android library
  //     if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
  //       this.filePath.resolveNativePath(imagePath)
  //         .then(filePath => {
  //           let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
  //           let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
  //           // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //         });
  //     } else {
  //       var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
  //       var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
  //       // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  //     }
  //   }, (err) => {
  //     this.presentToast('Error while selecting image.');
  //   });
  // }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });
    toast.present();
  }
}
