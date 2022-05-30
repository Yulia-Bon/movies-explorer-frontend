function Footer() {
    return (
        <footer className="footer">
            <h4 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h4>

            <div className="footer__info">
                <p className="footer__copyright">©2022. </p>

                <nav>
                    <ul className="footer__navigation-list">
                        <li className="footer__navigation-cell">
                            <a
                                className="footer__navigation-link"
                                href="https://praktikum.yandex.ru"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Яндекс Практикум
                            </a>
                        </li>
                        <li className="footer__navigation-cell">
                            <a
                                className="footer__navigation-link"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li className="footer__navigation-cell">
                            <a
                                className="footer__navigation-link"
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                FaceBook
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
