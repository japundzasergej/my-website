import { createSlice } from '@reduxjs/toolkit';

type Links = { id: number; link: string };

const initialState: Links[] = [
  { id: 1, link: 'home' },
  { id: 2, link: 'about' },
  { id: 3, link: 'portfolio' },
  { id: 4, link: 'experience' },
  { id: 5, link: 'contact' },
];

const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {},
});


export default navSlice.reducer