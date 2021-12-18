import { createSelector } from "reselect";
import { StoreState } from ".";
import { sumValue } from "../utils/function";

export const selectHeroProfile = createSelector(
  [(state: StoreState) => state.hero],
  (hero) => {
    const profile = hero.heroProfile;
    if (!profile) return {};
    const powerMax = sumValue(profile);
    return { profile, powerMax };
  }
);
