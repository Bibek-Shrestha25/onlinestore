import { createStore } from "redux";
import { counterReducer } from "./counterReducer";

export const mystore = createStore(counterReducer)