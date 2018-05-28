import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AddRetailerPage } from "../pages/add-retailer/add-retailer";
import { ApiServiceProvider } from "../providers/api-service/api-service";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";

import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { Camera } from "@ionic-native/camera";
import { AddStorePage } from "../pages/add-store/add-store";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddRetailerPage,
    AddStorePage
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddRetailerPage,
    AddStorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiServiceProvider,
    AuthServiceProvider,
    FileTransfer,
    // FileUploadOptions,
    // FileTransferObject,
    File,
    Camera
  ]
})
export class AppModule {}
