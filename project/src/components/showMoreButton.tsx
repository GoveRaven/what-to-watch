type TShowMoreButtonProps = {
  onClick: VoidFunction;
};

export function ShowMoreButton({
  onClick,
}: TShowMoreButtonProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>
        Show more
      </button>
    </div>
  );
}
