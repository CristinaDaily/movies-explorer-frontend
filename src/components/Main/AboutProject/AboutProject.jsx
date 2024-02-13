import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section className="project section" id='aboutProject'>
                <h2 className="section__title">About the Project</h2>
                <div className='section__dividing-line'></div>
                <article className="description">
                    <div className='description__column'>
                        <h3 className="desctiption__title">The diploma project consisted of 5 stages</h3>
                        <p className="desctiption__paragraph">Planning, backend development, frontend design, feature implementation, and final adjustments.</p>
                    </div>
                    <div className='description__column'>
                        <h3 className="desctiption__title">The project took 5 weeks to complete</h3>
                        <p className="desctiption__paragraph">Each stage had a deadline that had to be met in order to successfully complete the project.</p>
                    </div>
                </article>
                <div className="timeline">
                    <div className='timeline__component timeline__component_type_backend'>1 week</div>
                    <div className='timeline__component timeline__component_type_frontend'>4 weeks</div>
                    <p className="timeline__subtitle">Back-end</p>
                    <p className="timeline__subtitle">Front-end</p>
                </div>
            </section>
    );
}

export default AboutProject;