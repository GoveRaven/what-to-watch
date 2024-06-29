type TShowMoreButtonProps = {
  needHide: boolean;
  onClickAction: VoidFunction;
};

export function ShowMoreButton({
  needHide,
  onClickAction,
}: TShowMoreButtonProps) {
  return (
    <div className="catalog__more" hidden={needHide}>
      <button className="catalog__button" type="button" onClick={onClickAction}>
        Show more
      </button>
    </div>
  );
}
