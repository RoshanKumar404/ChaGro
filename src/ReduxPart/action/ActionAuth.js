import { saveUserData } from "../reducer/auth";
import store from "../store/store";

export function singnup (data){
    store.dispatch(saveUserData(data))
}