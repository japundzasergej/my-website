import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from '../features/portfolioSlice';
import navSliceReducer from '../features/navbar/navSlice';
import mobileNavSliceReducer from '../features/navbar/mobileNavSlice';
import experienceReducer from '../features/experience/experienceSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    nav: navSliceReducer,
    mobileNav: mobileNavSliceReducer,
    experience: experienceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
