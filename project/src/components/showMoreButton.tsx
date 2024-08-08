import { memo } from 'react';

type TShowMoreButtonProps = {
  onClick: VoidFunction;
};

function ShowMoreButtonComponent({ onClick }: TShowMoreButtonProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>
        Show more
      </button>
    </div>
  );
}

export const ShowMoreButton = memo(ShowMoreButtonComponent);
