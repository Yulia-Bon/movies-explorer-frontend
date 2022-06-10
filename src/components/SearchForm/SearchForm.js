import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__box">
          <div className="search__box-search">

            <input className="search__input" type="text" placeholder="Фильм" required></input>
          </div>
          <button className="search__button hover-button" type="submit"></button>
        </form>
        <div className="search__box-checkbox">
          <p className="search__checked-title">Короткометражки</p>
          <label className="search__checkbox">
            <input className="search__checkbox-input" type="checkbox"></input>
            <span className="search__checkbox-slider"></span>
          </label>

        </div>
      </div>
    </section>
  )
}

export default SearchForm;
