import { RootState } from "../redux/store";

export const getBaseCurrency = (state: RootState) => state.baseCurrency;
