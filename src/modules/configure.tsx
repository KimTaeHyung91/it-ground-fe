import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whiteList: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  // 환경 설정 변수 추가시,
  // devTools: process.env.NODE_ENV !== "production",
});
const persistor = persistStore(store);

export default {
  store,
  persistor,
};
