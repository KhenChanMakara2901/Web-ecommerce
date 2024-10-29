import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuItem } from "@/src/types/MenuItem";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

interface CartState {
  items: CartItem[];
  isPopupOpen: boolean;
  selectedProduct: MenuItem | null;
  isOrderSuccess: boolean;
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  isPopupOpen: false,
  selectedProduct: null,
  isOrderSuccess: false,
  itemCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<MenuItem>) {
      const existingItem = state.items.find(
        (item) => item.id === String(action.payload.id)
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          id: String(action.payload.id),
          quantity: 1,
        });
      }
      state.itemCount += 1;
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
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.itemCount -= itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.itemCount = 0;
    },
  },
});

export const {
  addToCart,
  openPopup,
  closePopup,
  hideOrderSuccess,
  addItem,
  removeItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
