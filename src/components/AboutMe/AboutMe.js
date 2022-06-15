import './AboutMe.css';
import Photo from '../../images/photo.jpg';
import studentsConfig from '../../utils/configs/studentsConfig';

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
            <h2 className="section-title">Студент</h2>
            <div className="about-me__container">
                <img className="about-me__photo" src={Photo} alt="Фотография автора"/>
                <div className="about-me__description">
                    <h3 className="about-me__title"> {studentsConfig.name}</h3>
                    <p className="about-me__info">{studentsConfig.info}</p>
                    <p className="about-me__text">{studentsConfig.about}</p>
                    <ul className="social-networks">
                        <li>
                            <a className="social-networks__link hover-link" href="https://www.linkedin.com/in/yulia-bon"
                               target="blank">LinkedIn</a>
                        </li>
                        <li>
                            <a className="social-networks__link hover-link" href="https://github.com/Yulia-Bon"
                               target="blank">Github</a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default AboutMe;
