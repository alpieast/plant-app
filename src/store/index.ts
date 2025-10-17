import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './slices/onboardingSlice';
import categoriesReducer from './slices/categoriesSlice';
import questionsReducer from './slices/questionsSlice';
import { RootState } from '../types';

export const store = configureStore({
  reducer: {
    onboarding: onboardingReducer,
    categories: categoriesReducer,
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type { RootState };
