import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import { StoreState } from "../../reducers";
import {
  getHeroAction,
  getHeroProfileAction,
  updateHeroProfileAction,
} from "../../reducers/heroAction";
import { HeroProfile as HeroProfileModel } from "../../models/hero";
import HeroList from "./components/HeroList";
import HeroProfile from "./components/HeroProfile";
import { selectHeroProfile } from "../../reducers/heroSelector";

export default function Hero() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hero } = useSelector((state: StoreState) => state.hero);
  const { profile, powerMax } = useSelector(selectHeroProfile);
  const handleGetHero = useCallback(() => {
    dispatch(getHeroAction());
  }, [dispatch]);
  const handleGetHeroProfile = useCallback(
    (id: string) => {
      dispatch(getHeroProfileAction(id));
    },
    [dispatch]
  );
  const handleUpdateHeroProfile = useCallback(
    (data: { id: string; data: HeroProfileModel }) => {
      dispatch(updateHeroProfileAction(data));
    },
    [dispatch]
  );

  const handleCardClick = (id: string) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    handleGetHero();
  }, [handleGetHero]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HeroList list={hero} onClick={handleCardClick} />}
        >
          <Route
            path=":id"
            element={
              <HeroProfile
                onGetProfile={handleGetHeroProfile}
                onUpdateHeroProfile={handleUpdateHeroProfile}
                profile={profile}
                powerMax={powerMax}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
