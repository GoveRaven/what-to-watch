type TShowMoreButtonProps = {
  onClickAction: VoidFunction;
};

export function ShowMoreButton({
  onClickAction,
}: TShowMoreButtonProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClickAction}>
        Show more
      </button>
    </div>
  );
}
