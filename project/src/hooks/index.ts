import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { TAppDispatch, TState } from '../types/store';
import { useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;
