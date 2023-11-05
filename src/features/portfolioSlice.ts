import { createSlice } from '@reduxjs/toolkit';

interface Portfolio {
  selectedPage: string;
  isMenuOpen: boolean;
  isTopOfPage: boolean;
  isDark: boolean;
  isModal: boolean;
  isMobileModal: boolean;
}

const initialState: Portfolio = {
  selectedPage: 'home',
  isMenuOpen: false,
  isTopOfPage: true,
  isDark: false,
  isModal: false,
  isMobileModal: false,
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setSelectedPage: (state, { payload }) => {
      state.selectedPage = payload;
    },
    setIsMenuOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setIsTopOfPage: (state, { payload }) => {
      state.isTopOfPage = payload;
    },
    setIsDark: (state) => {
      state.isDark = !state.isDark;
    },
    setIsModal: (state) => {
      state.isModal = !state.isModal;
    },
    setIsMobileModal: (state) => {
      state.isMobileModal = !state.isMobileModal;
    },
  },
});

export const {
  setSelectedPage,
  setIsMenuOpen,
  setIsTopOfPage,
  setIsDark,
  setIsModal,
  setIsMobileModal,
} = portfolioSlice.actions;
export default portfolioSlice.reducer;
