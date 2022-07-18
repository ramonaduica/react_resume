import './css/right-side.scss'
import avatar from "../images/download.jpg"
import linkedin from "../images/LI.png"
import github from "../images/GIT.png"
import {Education} from "./Education";
import {CustomList} from "./CustomList";
import {SectionCounter} from "./SectionCounter";
import {Links} from "./Links";


export const RightSide = function () {
    const skills = [
        {
            name: 'PHP/Symfony',
            level:7
        },
        {
            name: 'HTML',
            level:8
        },
        {
            name: 'CSS',
            level:7
        },
        {
            name: 'JS/React',
            level:5
        },
        {
            name: 'MySql',
            level:8
        },
        {
            name: 'jQuery',
            level:6
        }
    ];
    const levels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const additional = [
        'English B2',
        'Git',
        'Analytical Thinking',
        'Linux'
    ];
    const educations = [
        'Bachelor Degree: Technologies and Telecommunication Systems, Faculty of Electronics, Telecommunications and Information Technology, 2018-2022, Bucharest',
        'Baccalaureate Diploma: Mathematics and Informatics, Fratii Buzesti National College, Craiova, 2018',
        'Certifications: Web Development Fundamentals - PHP/MySQL'
    ];
    const hobbies = [
        'Programming',
        'Photography',
        'Reading'
    ];

    const links = [
        {
            name: linkedin,
            url: 'https://www.linkedin.com/in/ramonaduica/'
        },
        {
            name: github,
            url: 'https://github.com/ramonaduica'
        }
    ]

    return (
        <section id="right-side">
            <figure id='avatar'>
                <img src={avatar} alt=""/>
            </figure>
            <h1>Ramona-Elena
                <br/>
                <b>DUICĂ</b>
            </h1>
            <span>PHP Developer</span>

            <article id="skills">
                <div className='skills text-block'>
                    <SectionCounter count='01' />
                    <h2>SKILLS</h2>
                    <h3>Programming Languages</h3>
                    <ul id="programming-languages">
                        {
                            skills.map(function (obj) {
                                return (
                                    <li key={obj.name}>
                                        <span>{obj.name}</span>
                                        <ul className="dots-wrapper">
                                            {
                                                levels.map(function (value) {
                                                    return (
                                                        <li key={value} className={value < obj.level ? 'selected-dot-skill' : ''}/>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <h3>Additional Skills</h3>
                    <CustomList data={additional}/>
                </div>

                <div className='text-block education'>
                    <SectionCounter count='02' />
                    <h2>EDUCATION</h2>
                    {educations.map(text => (
                        <Education key={text} text = {text} />
                    ))}
                </div>

                <div className='text-block links-section'>
                    <SectionCounter count='03' />
                    <h2>LINKS</h2>
                    {links.map(link => (
                        <Links key={link} data={link} />
                    ))}
                </div>

                {/*<div className='text-block'>*/}
                {/*    <SectionCounter count='04' />*/}
                {/*    <h2>HOBBIES</h2>*/}
                {/*    <CustomList data={hobbies} />*/}
                {/*</div>*/}

            </article>
        </section>
    )
}