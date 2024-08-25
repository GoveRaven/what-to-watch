import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../consts/authhorization-status';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectAuthStatus } from '../store/slices/user-slice/selector';
import { makePathWithParams } from '../utils/makePath';
import { AppRoute } from '../consts/routes';
import { memo, useEffect, useRef, useState } from 'react';
import { selectFavoriteFilms } from '../store/slices/data-slice/selector';
import { fetchFavoriteFilms, toogleFavoriteFilms } from '../store/api-action';

type TFilmCardButtonsProps = {
  isInMyList: boolean;
  id: number;
  showAddReviewButton?: boolean;
};

export function FilmCardButtonsComponent({
  isInMyList,
  id,
  showAddReviewButton,
}: TFilmCardButtonsProps): JSX.Element {
  const [isFavoriteState, setIsFavoriteState] = useState(isInMyList);
  const [addedNumberToCount, setAddedNumberToCount] = useState(0);
  const navigate = useNavigate();
  const authStatus = useAppSelector(selectAuthStatus);
  const favoriteFilms = useAppSelector(selectFavoriteFilms);
  const toogleFavoriteFilmsRef = useRef<{ abort: VoidFunction } | null>(null);

  const dispatch = useAppDispatch();

  const playerRoute = makePathWithParams(AppRoute.Player, { id });
  const reviewRoute = makePathWithParams(AppRoute.AddReview, { id });

  const canShowReviewButton =
    showAddReviewButton && authStatus === AuthorizationStatus.Auth;

  function onMyListButtonClick() {
    if (authStatus === AuthorizationStatus.Auth) {
      toogleFavoriteFilmsRef.current?.abort();
      toogleFavoriteFilmsRef.current = dispatch(
        toogleFavoriteFilms({
          status: Number(!isFavoriteState),
          id: Number(id),
        })
      );
      setAddedNumberToCount(addedNumberToCount + (isFavoriteState ? -1 : 1));
      setIsFavoriteState(!isFavoriteState);
    } else {
      navigate(AppRoute.SignIn);
    }
  }

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAddedNumberToCount(0);
  }, [favoriteFilms]);

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
        onClick={onMyListButtonClick}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFavoriteState ? (
            <use xlinkHref="#in-list"></use>
          ) : (
            <use xlinkHref="#add"></use>
          )}
        </svg>
        <span>My list</span>
        <span className="film-card__count">
          {favoriteFilms.length + addedNumberToCount}
        </span>
      </button>
      {canShowReviewButton && (
        <Link to={reviewRoute} className="btn film-card__button">
          Add review
        </Link>
      )}
    </div>
  );
}

export const FilmCardButtons = memo(FilmCardButtonsComponent);
