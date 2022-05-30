import React from "react";

import RunningTitle from "../RunningTitle/RunningTitle";

function Promo() {
    return (
        <section className="techs" id="techs">
            <RunningTitle title="Технологии" />

            <h1 className="techs__title ">7 технологий</h1>
            <p className="techs__subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили в
                дипломном проекте.
            </p>
            <nav>
                <ul className="techs__nav ">
                    <li className="techs__nav-element">HTML</li>
                    <li className="techs__nav-element">CSS</li>
                    <li className="techs__nav-element">JS</li>
                    <li className="techs__nav-element">React</li>
                    <li className="techs__nav-element">Git</li>
                    <li className="techs__nav-element">Express.js</li>
                    <li className="techs__nav-element">mongoDB</li>
                </ul>
            </nav>
        </section>
    );
}

export default Promo;
