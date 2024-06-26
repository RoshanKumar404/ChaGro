// action.js or action.tsx
import { SIGN_UP_API } from "../../../config_ap_path/apiEndpoints";
import { apiPost } from "../../utils/utils";

export function signup(data) {
    return apiPost(SIGN_UP_API, data);
}
