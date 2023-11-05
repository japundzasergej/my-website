import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, src: 'html', style: 'shadow-orange-400' },
  { id: 2, src: 'css', style: 'shadow-sky-blue' },
  { id: 3, src: 'js', style: 'shadow-yellow-accent' },
  { id: 4, src: 'react', style: 'shadow-blue-accent' },
  { id: 5, src: 'ts', style: 'shadow-blue-400' },
  { id: 6, src: 'tw', style: 'shadow-blue-600' },
  { id: 7, src: 'vite', style: 'shadow-pink-400' },
  { id: 8, src: 'redux', style: 'shadow-white' },
  { id: 9, src: 'nodejs', style: 'shadow-green-600' },
  { id: 10, src: 'mongodb', style: 'shadow-green-300' },
  { id: 11, src: 'express', style: 'shadow-yellow-accent' },
  { id: 12, src: 'github', style: 'shadow-blue-accent' },
];

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {},
});

export default experienceSlice.reducer;
