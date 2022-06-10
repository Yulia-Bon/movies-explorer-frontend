import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {

    return (
    <main className="movies-page">
      <SearchForm />
      <MoviesCardList className="button_place_card-delete"/>
    </main>
  )
}

export default SavedMovies;
