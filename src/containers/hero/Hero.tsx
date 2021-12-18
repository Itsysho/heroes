import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router";
import { StoreState } from "../../reducers";
import { getHeroAction, getHeroProfileAction } from "../../reducers/heroAction";
import HeroList from "./components/HeroList";
import HeroProfile from "./components/HeroProfile";

export default function Hero() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hero, heroProfile } = useSelector((state: StoreState) => state.hero);
  const handleGetHero = useCallback(() => {
    dispatch(getHeroAction());
  }, [dispatch]);
  const handleGetHeroProfile = useCallback(
    (id: string) => {
      dispatch(getHeroProfileAction(id));
    },
    [dispatch]
  );

  const handleCardClick = (id: string) => {
    navigate(`${id}`);
  };

  console.log("render");

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
                profile={heroProfile}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}
