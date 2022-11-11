import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { contactsReducer } from './reducer';

 export const store = configureStore({
   reducer: {
     contacts: contactsReducer,
   },
  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware(),
  logger,
});
