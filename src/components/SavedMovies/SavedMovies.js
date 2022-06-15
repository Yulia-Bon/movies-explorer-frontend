import React, { useState } from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import film from "../../images/movie.jpg";

function MovieCard(props) {

    const [isLiked, setIsLiked] = useState(false);
    const isSaved = props.isSavedMovies;
    return (
        <main className="movies-page">
            <SearchForm/>
            <div className="template-element">

                < li className="card">
                    <div className="card__info">
                        <div className="card__info__wrapper">
                            <h4 className="card__title">33 слова о дизайне</h4>
                            <p className="card__duration"><span>{}</span> 40 минут</p>
                        </div>
                        {isSaved ? (
                            <button
                                className="button_place_card-delete hover-button"
                            ></button>
                        ) : (
                            <button
                                className={
                                    isLiked ? "movies-card__like-movie_active hover-button" : "button_place_card-delete hover-button" //!
                                }
                            ></button>
                        )}
                    </div>
                    <img className="card__image" src={film} alt="обложка фильма"/>
                </li>
            </div>
        </main>
    );
}

export default MovieCard;
