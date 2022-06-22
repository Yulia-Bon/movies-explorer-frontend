import './Profile.css';
import React from 'react';
import Error from '../Error/Error';
import { Link } from 'react-router-dom';
import useFormValidation from '../../utils/validation';
import CurrentUserContext from '../../context/CurrentUserContext';

function Profile(props) {

    const { values, handleChange, setValues, setIsValid, isValid, errors, resetForm } = useFormValidation();
    const currentUser = React.useContext(CurrentUserContext);


    const [isInputActive, setIsInputActive] = React.useState(false);

    React.useEffect(() => {
        if (currentUser) {
            setValues({
                name: currentUser.name,
                email: currentUser.email
            })
        }
    }, [currentUser])

    React.useEffect(() => {
        if(currentUser.name === values.name && currentUser.email === values.email) {
            setIsValid(false)
        }
    }, [isValid, currentUser, values, props.isSuccessfulRequest])

    React.useEffect(() => {
        if(props.errorStatusCode) {
            setIsValid(false);
        }
    }, [isValid, props.errorStatusCode, props.isSuccessfulRequest])

    function handleEditProfile() {
        setIsInputActive(true);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateUserInfo(
            values.name,
            values.email,
        )

        if(!props.isSuccessfulRequest) {
            setIsInputActive(false);
        } else  {
            setIsInputActive(true);
        }
    }

    function handleChangeUpdateUser(e) {
        handleChange(e);
    }

    return (
        <section className="profile">
            <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
            <form className="profile__container" onSubmit={handleSubmit} noValidate>

                <div className="profile__box">
                    <label className="profile__label" htmlFor="name-input">Имя</label>
                    <input
                        id="name-input"
                        className="profile__input"
                        type="text"
                        name="name"
                        placeholder="Имя"
                        required
                        minLength="3"
                        maxLength="40"
                        value={values.name || ''}
                        onChange={handleChangeUpdateUser}
                        disabled={!isInputActive}>
                    </input>

                </div>
                <span id="name-input-error" className="profile__error">{errors.name || ''}</span>
                <div className="profile__box">
                    <label className="profile__label" htmlFor="email-input">E-mail</label>
                    <input
                        id="email-input"
                        className="profile__input"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        value={values.email || ''}
                        onChange={handleChangeUpdateUser}
                        pattern="^[a-zA-Z][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$"
                        disabled={!isInputActive}>
                    </input>

                </div>
                <span id="email-input-error" className="profile__error">{errors.email || ''}</span>


            {!isInputActive ? (
                <>
                    <span className="error">{props.isSuccessfulRequest ? 'Имя и email изменены!' : ''}</span>
                <div className="profile__link-container">
                    <button className="button link link_type_profile hover-link"
                            onClick={handleEditProfile}>Редактировать
                    </button>
                    <Link to="/" className="link link_type_logout hover-link" onClick={props.logout}>Выйти из аккаунта</Link>
                </div>
                    </>
            ) : (
                <div className="profile__button-container">
                    <Error errorStatusCode={props.errorStatusCode} isSuccessfulRequest={props.isSuccessfulRequest} />
                    <button
                        className={`button button_type_form hover-button ${!isValid ? 'button_disabled' : ''}`}
                        type="submit"
                        disabled={!isValid}>
                        Сохранить
                    </button>
                </div>
            )}
            </form>
        </section>
    )
}

export default Profile;

