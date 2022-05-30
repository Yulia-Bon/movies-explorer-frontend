import RunningTitle from "../RunningTitle/RunningTitle";
import Preloader from "../Preloader/Preloader";
import avatar from "../../images/photo_59.jpg";
import studentsConfig from '../../utils/configs/studentsConfig';

function AboutMe() {
    return (

        <section className="about-me" id="about-me">
            <Preloader/>
            <RunningTitle title="Студент" />
            <div className="about-me__info">
                <div className="about-me__user-text-info">
                    <h1 className="about-me__name">{studentsConfig.name}</h1>
                    <h3 className="about-me__profession">
                        {studentsConfig.info}</h3>
                    <p className="about-me__summary">
                        {studentsConfig.about}
                    </p>

                    <ul className="about-me_contact-navigation">
                        <li className="about-me_contact-cell">
                            <a className="about-me_contact-link" href="https://www.linkedin.com/in/yulia-bon">LinkedIn</a>
                        </li>
                        <li className="about-me_contact-cell">
                            <a className="about-me_contact-link" href="https://github.com/Yulia-Bon">GitHub</a>
                        </li>
                    </ul>
                </div>
                <img className="about-me__avatar" src={avatar} alt="user-avatar"/>
            </div>






        </section>
    );
}

export default AboutMe;
