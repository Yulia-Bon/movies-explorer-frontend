import React from 'react';
import { Link, Route } from "react-router-dom";
import headerLogo from "../../images/logo.svg";
function Header({handleLogOut = null}) {

    return (
        <header className='header'>
            <div
                className="header__nav"
            >
                    <img
                        src={headerLogo}
                        alt="Логотип приложения movies"
                        className="header__logo"
                    />

                <Route path="/sign-in">
                    <Link
                        to="/sign-up"
                        className="header__button"
                        onClick={handleLogOut}
                    >
                        Регистрация
                    </Link>
                </Route>

                <Route path="/sign-up">
                    <Link
                        to="/sign-in"
                        className="header__button"
                        onClick={handleLogOut}
                    >
                        Войти
                    </Link>
                </Route>

                <Route exact path="/">
                    <div className='header__nav_desktop'>
                        <Link
                            to="/sign-in"
                            className="header__button"
                            onClick={handleLogOut}
                        >
                            Аккаунт
                        </Link>
                    </div>
                </Route>
            </div>
        </header>
    );
}

export default Header;
