function MoreFilmsButton({onClick}) {
    return (
       <button type="button" className="page__button movies-cards__btn" onClick={onClick}>
        Ещё
      </button>
  );
}

export default MoreFilmsButton;
