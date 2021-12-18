import { Hero, HeroProfile } from "../models/hero";
import { ajax } from "rxjs/ajax";
import { JSON_CONTENT } from "../utils/ajaxUtil";

const HERO_API_PATH = "/heroes";

export const getHeroListAjax = () =>
  ajax.get<Hero[]>(HERO_API_PATH, JSON_CONTENT);
export const getHeroProfileAjax = (id: string) =>
  ajax.get<HeroProfile>(`${HERO_API_PATH}/${id}/profile`, JSON_CONTENT);
export const updateHeroProfileAjax = ({
  id,
  data,
}: {
  id: string;
  data: HeroProfile;
}) => ajax.patch(`${HERO_API_PATH}/${id}/profile`, data, JSON_CONTENT);
