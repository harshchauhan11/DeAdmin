import * as constants from './constants';

export const postLoginApi = constants.API_BASE_URL + constants.SLASH + constants.LOGIN;
export const postLocationApi = constants.API_BASE_URL + constants.SLASH + constants.LOCATIONS;
export const postNearApi = constants.API_BASE_URL + constants.SLASH + constants.NEAR;
export const postLocationHistoryApi = constants.API_BASE_URL + constants.SLASH + constants.LOCATIONSHISTORY;
export const getVendorProfileApi = constants.API_BASE_URL + constants.SLASH + constants.VENDOR_PROFILE;

// Admin Level APIs
export const addRetailerDelivererAPI = constants.API_BASE_URL + constants.SLASH + constants.ADD_RETAILER_DELIVERER;
export const addStoreAPI = constants.API_BASE_URL + constants.SLASH + constants.ADD_STORE;
export const addPhotoAPI = constants.API_BASE_URL + constants.SLASH + constants.ADD_PHOTO;
export const getRetailersAPI = constants.API_BASE_URL + constants.SLASH + constants.GET_RETAILERS;
export const getRetailerTypesAPI = constants.API_BASE_URL + constants.SLASH + constants.GET_RETAILER_TYPES;
export const getStoreTypesAPI = constants.API_BASE_URL + constants.SLASH + constants.GET_STORE_TYPES;
export const PhotosURI = constants.API_BASE_URL + constants.SLASH + constants.PHOTO_CONST;

