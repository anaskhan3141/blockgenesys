import React from 'react'
import goldfinch from "../../assets/clients/goldfinch.svg"
import nextIcon from '../../assets/nextButton.svg'
import projects from './ProjectsData'
import { useTheme } from '../ThemeProvider'
import "./Projects.css"

const Projects = () => {


    const { theme, toggleTheme } = useTheme();
    return (
        <section className='projects-main'>
            <h1>Projects</h1>
            <div className='projects'>

                {
                    projects.map((item, index) => (
                        <div key={index} className="project-item">

                            <div className='project-item-left'>
                                <a key={index} href={item.clientLink} target='blank' className="project-logo">
                                    <img src={item.logo} alt="" />
                                </a>
                                <p className='project-name'>{item.name}</p>
                            </div>

                            <div className='project-item-right'>
                                <p className='project-date'>{item.date}</p>
                                <a href={item.link} target='blank'><div className="project-button">View Report</div></a>

                            </div>
                        </div>
                    ))
                }

                <div className="view-all">

                    <a href='https://www.github.com' target='blank'>
                        <div className="view-all-button"
                            style={{ backgroundColor: theme == 'light' ? "#afafaf" : "#2b2b2b" }}>
                            View All
                            <img src={nextIcon} alt="" className='next-icon' />
                        </div>
                    </a>

                </div>
            </div>

        </section>
    )
}

export default Projects