import { Hero, HeroProfile } from "../models/hero";
import { ActionType } from "./type";
import { HeroActionType } from "./heroAction";

export interface HeroState {
  hero?: Hero[];
  heroProfile?: HeroProfile;
}

const initState: HeroState = {};

export const HeroPreloadState: HeroState = {
  ...initState,
};

const handler: Record<
  string,
  (state: HeroState, action: ActionType<any>) => HeroState
> = {
  [HeroActionType.GET_SUCCESS]: (
    state: HeroState,
    action: ActionType<any>
  ) => ({
    ...state,
    hero: action.payload,
  }),
  [HeroActionType.GET_PROFILE_SUCCESS]: (
    state: HeroState,
    action: ActionType<any>
  ) => ({
    ...state,
    heroProfile: action.payload,
  }),
};

export default function heroStateReducer(
  state: HeroState = initState,
  action: ActionType<any>
) {
  if (handler.hasOwnProperty(action.type)) {
    return handler[action.type](state, action);
  }
  return state;
}
