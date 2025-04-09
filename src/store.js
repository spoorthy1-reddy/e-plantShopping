// Importing the necessary function from Redux Toolkit to configure the store
import { configureStore } from '@reduxjs/toolkit';
// Importing the cartReducer from the CartSlice.js to manage the cart state
import cartReducer from './CartSlice';

// Configuring the Redux store and assigning the cartReducer to manage the 'cart' slice of state
const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Exporting the configured store to be used in the application
export default store;
