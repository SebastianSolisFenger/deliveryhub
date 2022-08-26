import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from "../stores/rootReducer";
//import redux thunk as we need our actions to be async
import thunk from "redux-thunk";


 /* eslint-disable no-underscore-dangle */
const store = configureStore(
  {
    reducer: rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  },
  applyMiddleware(thunk)
);
/* eslint-enable */




export default store;
