import { HttpClient } from "@angular/common/http";
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import * as apiCalls from "../api-service/api-calls";
import { Retailer } from "../../models/Retailer";

@Injectable()
export class AuthServiceProvider {
  constructor(public http: Http, private httpClient: HttpClient) {
    console.log("Hello AuthServiceProvider Provider");
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http
        .post(type, JSON.stringify(credentials), { headers: headers })
        .subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

  getData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http
        .post(type, JSON.stringify(credentials), { headers: headers })
        .subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

  checkLogin(userData) {
    return this.postData(userData, apiCalls.postLoginApi);
  }

  addLocation(userPostData) {
    debugger;
    return this.postData(userPostData, apiCalls.postLocationApi);
  }

  getNearLocations(location) {
    return this.postData(location, apiCalls.postNearApi);
  }

  getSavedLocations(userPostData) {
    // debugger;
    return this.postData(userPostData, apiCalls.postLocationHistoryApi);
  }

  getVendorProfile(req) {
    return this.postData(req, apiCalls.getVendorProfileApi);
  }

  addRetailerDeliverer(req) {
    return this.postData(req, apiCalls.addRetailerDelivererAPI);
  }

  addStore(req) {
    return this.postData(req, apiCalls.addStoreAPI);
  }

  getRetailers() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http
        .get(apiCalls.getRetailersAPI, { headers: headers })
        .subscribe(
          res => {
            resolve(res.json());
          },
          err => {
            reject(err);
          }
        );
    });
  }

  // public getRetailers(): Observable<Retailer[]> {
  //   return this.httpClient
  //     .get(apiCalls.getRetailersAPI)
  //     .map((retailers : Retailer[]) => {
  //       return retailers.map(retailer => new Retailer(retailer));
  //     });
  // }
}
