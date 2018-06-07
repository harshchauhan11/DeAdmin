"use strict";
// import { HttpHeaders } from "@angular/common/http";

export const origin: string = "http://13.127.199.206";              // AWS
// export const origin: string = "http://localhost";                      // Local
// export const origin: string = "http://127.0.0.1:81";                      // Local

export const baseURL: string = origin + "/";
export const apiVersion: string = "DeAdminPHP";                          // AWS
// export const apiVersion: string = "am";                                // Local

export const apiURL: string = baseURL + apiVersion;
export const API_BASE_URL: string = apiURL;

//HTTP Methods
export const POST: string = "POST";
export const GET: string = "GET";
export const PUT: string = "PUT";
export const DELETE: string = "DELETE";

//Header Contents
export const Accept: string = "Accept";
export const ContentType: string = "Content-Type";
export const Authorization: string = "Authorization";
export const ApplicationJson: string = "application/json";
export const Token: string = "token";

//API Keys
export const SLASH: string = "/";
export const LOGIN: string = "login.php";
export const LOCATIONS: string = "locations.php";
export const NEAR: string = "near.php";
export const LOCATIONSHISTORY: string = "locations_history.php";
export const VENDOR_PROFILE: string = "store_profile.php";

// Admin Level APIs
export const ADD_RETAILER_DELIVERER: string = "add_user_admin.php";
export const ADD_STORE: string = "add_store_admin.php";
export const GET_RETAILERS: string = "retailers.php";
export const GET_RETAILER_TYPES: string = "retailer_types.php";
export const GET_STORE_TYPES: string = "store_types.php";
export const ADD_PHOTO: string = "upload.php";
export const PHOTO_CONST: string = "uploads";
