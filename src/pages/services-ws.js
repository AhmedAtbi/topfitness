import { WS_URL } from "../ws-url"
import { get, post } from "../ApiServices"
import { getFormattedURL } from "../utils";


//get all Services by filters
export const getServices = (params = {}) => {
    return get(WS_URL.WS_SERVICES);
}

//get single Service
export const getService = (id) => {
    let parmsToReplace = { "{id}": id }
    return get(getFormattedURL(WS_URL.WS_SERVICES, parmsToReplace));
}

//post single Service
export const setService = (jsonData) => {
    return post(WS_URL.WS_SERVICES, jsonData);
}
