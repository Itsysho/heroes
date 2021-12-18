import { Hero, HeroProfile } from "../models/hero";

export enum HeroActionType {
  GET = "@Hero/GET",
  GET_SUCCESS = "@Hero/GET_SUCCESS",
  GET_ERROR = "@Hero/GET_ERROR",

  GET_PROFILE = "@Hero/GET_PROFILE",
  GET_PROFILE_SUCCESS = "@Hero/GET_PROFILE_SUCCESS",
  GET_PROFILE_ERROR = "@Hero/GET_PROFILE_ERROR",

  UPDATE_PROFILE = "@Hero/UPDATE_PROFILE",
  UPDATE_PROFILE_SUCCESS = "@Hero/UPDATE_PROFILE_SUCCESS",
  UPDATE_PROFILE_ERROR = "@Hero/UPDATE_PROFILE_ERROR",
}

export const getHeroAction = () => ({
  type: HeroActionType.GET,
});

export const getHeroSuccessAction = (payload: Hero[]) => ({
  type: HeroActionType.GET_SUCCESS,
  payload,
});

export const getHeroProfileAction = (payload: string) => ({
  type: HeroActionType.GET_PROFILE,
  payload,
});

export const getHeroProfileSuccessAction = (payload: HeroProfile) => ({
  type: HeroActionType.GET_PROFILE_SUCCESS,
  payload,
});

export const updateHeroProfileAction = (payload: HeroProfile) => ({
  type: HeroActionType.UPDATE_PROFILE,
  payload,
});

export const updateHeroProfileSuccessAction = () => ({
  type: HeroActionType.UPDATE_PROFILE_SUCCESS,
});
