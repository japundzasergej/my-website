import { createSlice } from '@reduxjs/toolkit';

type Links = { id: number; link: string; title: string };

const initialState: Links[] = [
  { id: 1, link: 'm-home', title: 'home' },
  { id: 2, link: 'm-about', title: 'about' },
  { id: 3, link: 'm-portfolio', title: 'portfolio' },
  { id: 4, link: 'm-experience', title: 'experience' },
  { id: 5, link: 'm-contact', title: 'contact' },
];

const mobileNavSlice = createSlice({
  name: 'mobileNav',
  initialState,
  reducers: {},
});

export default mobileNavSlice.reducer;
