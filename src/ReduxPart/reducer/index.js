import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";

const appreducer = combineReducers({
    auth
});

export default appreducer;
