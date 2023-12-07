import React from 'react';
import './AboutProject.css';

function AboutProject(props) {
    return (
        <section className="project section" id='aboutProject'>
                <h2 className="section__title">О проекте</h2>
                <div className='section__dividing-line'></div>
                <article className="description">
                    <div className='description__column'>
                        <h3 className="desctiption__title">Дипломный проект включал 5 этапов</h3>
                        <p className="desctiption__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='description__column'>
                        <h3 className="desctiption__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="desctiption__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </article>
                <div className="timeline">
                    <div className='timeline__component timeline__component_type_backend'>1 неделя</div>
                    <div className='timeline__component timeline__component_type_frontend'>4 недели</div>
                    <p className="timeline__subtitle">Back-end</p>
                    <p className="timeline__subtitle">Front-end</p>
                </div>
            </section>
    );
}

export default AboutProject;