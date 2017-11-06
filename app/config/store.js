import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducers from "../reducers";

const middleWare = [
    logger
];
if (process.env.NODE_ENV !== "development") middleWare = [];

export default createStore(reducers, applyMiddleware(...middleWare));
