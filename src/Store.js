import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./reducers";

const initalState = {
    user: {
        data: [],
        isLoading: false,
        isSubmitting: false,
        singleData: {}
    }
};
const middleware = [thunk]

export const store = createStore(RootReducer, initalState, applyMiddleware(...middleware))
