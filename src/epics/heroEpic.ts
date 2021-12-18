import { catchError, empty, exhaustMap, from, map, Observable } from "rxjs";
import { AnyAction } from "redux";
import { ofType } from "redux-observable";
import {
  getHeroProfileSuccessAction,
  getHeroSuccessAction,
  HeroActionType,
  updateHeroProfileSuccessAction,
} from "../reducers/heroAction";
import * as HeroServices from "../services/heroServices";

const getHeroListEpic = (action$: Observable<AnyAction>) =>
  action$.pipe(
    ofType(HeroActionType.GET),
    exhaustMap(() =>
      from(HeroServices.getHeroListAjax()).pipe(
        map((res) => getHeroSuccessAction(res.response)),
        catchError(() => empty())
      )
    )
  );

const getHeroProfileEpic = (action$: Observable<AnyAction>) =>
  action$.pipe(
    ofType(HeroActionType.GET_PROFILE),
    exhaustMap(({ payload }) =>
      from(HeroServices.getHeroProfileAjax(payload)).pipe(
        map((res) => getHeroProfileSuccessAction(res.response)),
        catchError(() => empty())
      )
    )
  );

const updateHeroProfileEpic = (action$: Observable<AnyAction>) =>
  action$.pipe(
    ofType(HeroActionType.UPDATE_PROFILE),
    exhaustMap(({ payload }) =>
      from(HeroServices.updateHeroProfileAjax(payload)).pipe(
        map(() => updateHeroProfileSuccessAction()),
        catchError(() => empty())
      )
    )
  );

const heroEpics = [getHeroListEpic, getHeroProfileEpic, updateHeroProfileEpic];

export default heroEpics;
