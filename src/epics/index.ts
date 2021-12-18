import { AnyAction } from "redux";
import { combineEpics } from "redux-observable";
import { HeroActionType } from "../reducers/heroAction";
import heroEpics from "./heroEpic";

type RootAction = HeroActionType;

export const rootEpic = combineEpics<
  AnyAction,
  {
    type: RootAction;
    payload?: any;
  },
  void,
  any
>(...heroEpics);
