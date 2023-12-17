import { WS_URL } from "../ws-url"
import { get, post } from "../ApiServices"
import { getFormattedURL } from "../utils";


//get all consultations by filters
export const getConsultations = (params = {}) => {
    return get(WS_URL.WS_CONSULTATIONS);
}

//get single consultation
export const getConsultation = (id) => {
    let parmsToReplace = { "{id}": id }
    return get(getFormattedURL(WS_URL.WS_CONSULTATIONS, parmsToReplace));
}

//post single consultation
export const setConsultation = (jsonData) => {
    return post(WS_URL.WS_CONSULTATIONS, jsonData);
}
