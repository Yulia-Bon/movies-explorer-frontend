import React from 'react';
import './MoviesCard.css';
import film from '../../images/movie.jpg';

function MoviesCard({ duration, handleClick }) {
  return (
    <>
      <li className="card">
        <div className="card__info">
            <div className="card__info__wrapper">
          <h4 className="card__title">33 слова о дизайне</h4>
          <p className="card__duration"><span>{duration}</span> 40 минут</p>
            </div>
          <button className="movies-card__like-movie movies-card__like-movie_active hover-button" type="button"></button>
        </div>
        <img className="card__image" src={film} alt="обложка фильма" />

      </li>
      <li className="card">
        <div className="card__info">
            <div className="card__info__wrapper">
          <h4 className="card__title">33 слова о дизайне</h4>
          <p className="card__duration"><span>{duration}</span> 40 минут</p>
            </div>
          <button className="movies-card__like-movie movies-card__like-movie_active hover-button" type="button"></button>
        </div>
        <img className="card__image" src={film} alt="обложка фильма" />

      </li>
      <li className="card">
        <div className="card__info">
            <div className="card__info__wrapper">
          <h4 className="card__title">33 слова о дизайне</h4>
          <p className="card__duration"><span>{duration}</span> 40 минут</p>
            </div>
          <button className="movies-card__like-movie movies-card__like-movie_active hover-button" type="button"></button>
        </div>
        <img className="card__image" src={film} alt="обложка фильма" />

      </li>
      <li className="card">
        <div className="card__info">
            <div className="card__info__wrapper">
          <h4 className="card__title">33 слова о дизайне</h4>
          <p className="card__duration"><span>{duration}</span> 40 минут</p>
            </div>
          <button className="movies-card__like-movie movies-card__like-movie_active hover-button" type="button"> </button>
        </div>
        <img className="card__image" src={film} alt="обложка фильма" />

      </li>
      <li className="card">
        <div className="card__info">
            <div className="card__info__wrapper">
          <h4 className="card__title">33 слова о дизайне</h4>
          <p className="card__duration"><span>{duration}</span> 40 минут</p>
            </div>
          <button className="movies-card__like-movie movies-card__like-movie_active hover-button" type="button"> </button>
        </div>
        <img className="card__image" src={film} alt="обложка фильма" />

      </li>
      <li className="card">
        <div className="card__info">
            <div className="card__info__wrapper">
          <h4 className="card__title">33 слова о дизайне</h4>
          <p className="card__duration"><span>{duration}</span> 40 минут</p>
            </div>
          <button className="movies-card__like-movie movies-card__like-movie_active hover-button" type="button"> </button>
        </div>
        <img className="card__image" src={film} alt="обложка фильма" />

      </li>
    </>
  )
}

export default MoviesCard;
