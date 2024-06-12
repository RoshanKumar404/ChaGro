import { configureStore } from "@reduxjs/toolkit";
import appreducer from "../reducer/index.js"; // Make sure the path to reducers is correct

const store = configureStore({
    reducer: appreducer // This should be 'reducer', not 'appreducer'
});

export default store;
