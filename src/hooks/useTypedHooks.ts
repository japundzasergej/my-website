import { RootState, AppDispatch } from '../app/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type AppDispatchFunc = () => AppDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: AppDispatchFunc = useDispatch;
