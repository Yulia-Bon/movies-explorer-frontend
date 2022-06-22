import './MoviesCard.css';
import React from 'react';
import { handleDuration } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

function MoviesCard(props) {
    const location = useLocation();
    const locationMovies = location.pathname === '/movies';

    function handleSaveMovie() {
        console.log(props.movie);

        const newMovie = {
            country: props.movie.country || 'Нет данных',
            director: props.movie.director,
            duration: props.movie.duration,
            year: props.movie.year,
            description: props.movie.description,
            image: `https://api.nomoreparties.co/${props.movie.image.url}`,
            trailerLink: props.movie.trailerLink,
            nameRU: props.movie.nameRU || 'Нет данных',
            nameEN: props.movie.nameEN || 'Нет данных',
            thumbnail: `https://api.nomoreparties.co/${props.movie.image.formats.thumbnail.url}`,
            movieId: props.movie.id
        }
        props.onSaveMovie(newMovie)
    }

    function handleDeleteMovie(e) {
        e.preventDefault();

        if (location.pathname !== '/movies') {
            props.onDeleteMovie(props.movie);
        } else {
            const nameRu = String(props.movie.nameRU)
            const movieToDeleteArray = props.savedMovies.filter(data => {
                const movieName = String(data.nameRU);
                const movieToDeleteName = movieName.includes(nameRu);
                return movieToDeleteName;
            })
            const movieToDelete = movieToDeleteArray[0];
            props.onDeleteMovie(movieToDelete);
        }
    }

    return (
        <li className="card">
            <div className="card__info">
                <div className="card__info__wrapper">
                    <h2 className="card__title">{props.movie.nameRU}</h2>
                    <p className="card__duration">{handleDuration(props.movie.duration)}</p>
                </div>

                {locationMovies ? (
                    <button
                        className={`movies-card__like-movie hover-button ${props.isLikeMovies ? 'movies-card__like-movie_active' : ''}`}
                        onClick={props.isLikeMovies ? handleDeleteMovie : handleSaveMovie}>
                    </button>
                ) : (
                    <button
                        className="movies-card__like-movie hover-button button_place_card-delete"
                        onClick={handleDeleteMovie}>
                    </button>
                )}
            </div>
            <a href={props.movie.trailerLink} target="blank">
                <img className="card__image"
                     src={(location.pathname === '/movies') ? `https://api.nomoreparties.co/${props.movie.image.url}` : props.movie.image}
                     alt="Постер фильма"/>
            </a>

        </li>
    )
}

export default MoviesCard;

