import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectAuthStatus } from '../store/slices/user-slice/selector';
import { makePathWithParams } from '../utils/makePath';
import { AppRoute } from '../consts/routes';
import { memo, useState } from 'react';
import { selectFavoriteFilms } from '../store/slices/data-slice/selector';
import { fetchFavoriteFilms, toogleFavoriteFilms } from '../store/api-action';

type TFilmCardButtonsProps = {
  isFavorite: boolean;
  id: number;
  isNeedReviewBtn?: boolean;
};

export function FilmCardButtonsComponent({
  isFavorite,
  id,
  isNeedReviewBtn,
}: TFilmCardButtonsProps): JSX.Element {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const navigate = useNavigate();
  const authStatus = useAppSelector(selectAuthStatus);
  const favoriteFilms = useAppSelector(selectFavoriteFilms);
  const dispatch = useAppDispatch();

  const playerRoute = makePathWithParams(AppRoute.Player, { id });
  const reviewRoute = makePathWithParams(AppRoute.AddReview, { id });

  const canShowReviewBtn =
    isNeedReviewBtn && authStatus === AuthorizationStatus.Auth;

  function onBtnClick() {
    if (authStatus === AuthorizationStatus.Auth) {
      dispatch(
        toogleFavoriteFilms({
          status: Number(!isFavoriteState),
          id: Number(id),
        })
      );
      dispatch(fetchFavoriteFilms());
      setIsFavoriteState(!isFavoriteState);
    } else {
      navigate(AppRoute.SignIn);
    }
  }

  return (
    <div className="film-card__buttons">
      <button
        className="btn btn--play film-card__button"
        type="button"
        onClick={() => navigate(playerRoute)}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={onBtnClick}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFavoriteState ? (
            <use xlinkHref="#in-list"></use>
          ) : (
            <use xlinkHref="#add"></use>
          )}
        </svg>
        <span>My list</span>
        <span className="film-card__count">{favoriteFilms.length}</span>
      </button>
      {canShowReviewBtn ? (
        <Link to={reviewRoute} className="btn film-card__button">
          Add review
        </Link>
      ) : null}
    </div>
  );
}

export const FilmCardButtons = memo(FilmCardButtonsComponent);
