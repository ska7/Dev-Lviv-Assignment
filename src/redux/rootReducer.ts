import { AnyAction } from "redux";
import { SET_BASE_CURRENCY } from "./actionTypes";

interface RootReducer {
  baseCurrency: string;
}

const initState: RootReducer = {
  baseCurrency: "",
};

const rootReducer = (state = initState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_BASE_CURRENCY:
      return { ...state, baseCurrency: payload };

    default:
      return state;
  }
};

export default rootReducer;
