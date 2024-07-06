import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import testReducer from "./reducers/test";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();
