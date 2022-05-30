import React from 'react';

const Portfolio = () => {
    return (
        <section className='portfolio'>
                <h4 className="portfolio__title title">Портфолио</h4>
                <ul className="portfolio__navigation">
                    <li className="portfolio__cell">
                        <a className="portfolio__link link" href="https://github.com/Yulia-Bon/how-to-learn" target="_blank"
                           rel="noreferrer">Статичный сайт
                            <div className = "portfolio__link-icon">↗</div>
                        </a>

                    </li>
                    <li className="portfolio__cell">
                        <a className="portfolio__link link" href="https://yulia-bon.github.io/russian-travel/index.html"
                           target="_blank"
                           rel="noreferrer"
                        >Адаптивный сайт
                            <div className = "portfolio__link-icon">↗</div>
                        </a>

                    </li>
                    <li className="portfolio__cell">
                        <a className="portfolio__link" href=""
                           target="_blank"
                           rel="noreferrer">
                            Одностраничное приложение
                            <div className = "portfolio__link-icon">↗</div>
                        </a>

                    </li>
                </ul>
        </section>
    )
};

export default Portfolio;
