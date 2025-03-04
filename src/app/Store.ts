import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { doctorsApi } from "../features/Doctors/DoctorsAPI";
import { departmentsApi } from "../features/department/DepartmentAPI";

// Define persistence configuration for doctors
const doctorsPersistConfig = {
  key: "doctors",
  storage,
  whitelist: ["doctors"], // Only persist doctors state
};

// Create a persisted reducer for the doctorsApi slice
const persistedDoctorsReducer = persistReducer(doctorsPersistConfig, doctorsApi.reducer);

// Configure Redux store
const store = configureStore({
  reducer: {
    [doctorsApi.reducerPath]: persistedDoctorsReducer,
    [departmentsApi.reducerPath]: departmentsApi.reducer,
    // Use persisted reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // To avoid serializability warnings
    }).concat(doctorsApi.middleware).concat(departmentsApi.middleware),
});

// Create persistor
export const persistor = persistStore(store);

// Export store & types
export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
