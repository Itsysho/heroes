import { combineReducers } from "redux";
import heroStateReducer, { HeroState, HeroPreloadState } from "./heroReducer";

export interface StoreState {
  hero: HeroState;
}

export const storePreloadState: StoreState = {
  hero: HeroPreloadState,
};

export const rootReducer = combineReducers<StoreState>({
  hero: heroStateReducer,
});
