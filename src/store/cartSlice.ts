import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "@/src/types/MenuItem";

interface CartState {
  items: MenuItem[];
  isPopupOpen: boolean;
  selectedProduct: MenuItem | null;
  isOrderSuccess: boolean;
}

const initialState: CartState = {
  items: [],
  isPopupOpen: false,
  selectedProduct: null,
  isOrderSuccess: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<MenuItem>) {
      state.items.push(action.payload);
      state.isOrderSuccess = true;
    },
    openPopup(state, action: PayloadAction<MenuItem>) {
      state.isPopupOpen = true;
      state.selectedProduct = action.payload;
    },
    closePopup(state) {
      state.isPopupOpen = false;
      state.selectedProduct = null;
    },
    hideOrderSuccess(state) {
      state.isOrderSuccess = false;
    },
  },
});

export const { addToCart, openPopup, closePopup, hideOrderSuccess } =
  cartSlice.actions;
export default cartSlice.reducer;
