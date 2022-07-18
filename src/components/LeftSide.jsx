import {WorkExperience} from "./WorkExperience";
import './css/left-side.scss';
import {PersonalProjects} from "./PersonalProjects";
import {CustomList} from "./CustomList";

export const LeftSide = function () {
    const jobs = [
        {
            title: 'Internship',
            period: '06/2021 to 09/2021, Telekom Romania',
            details: "Participate in the design and implementation of specific SMS messaging services, MMS voicemail, USSD, value-added services (VAS), SIM cards.",
            keywords: 'Linux, Networking, SQL, XML'
        }
    ];
    const personalProjects = [
        {
            details: "I built a website that involves ordering food online. The project is structured in three parts: user, admin and courier. Users can log in and add menus\n" +
                "                        from restaurants to their shopping cart to place an order. The admin can\n" +
                "                        add, edit or delete restaurants, add menus for existing restaurants. He can\n" +
                "                        also see all the orders made and their status which is checked by the\n" +
                "                        courier in his application.",
            technology: "Technology stack: PHP - Symfony, MySQL - Doctrine, JavaScript, AJAX,\n" +
                "                        jQuery, CSS and Bootstrap."
        }
    ]
    const softSkills = [
        'Teamwork',
        'Time management',
        'Critical thinking',
        'Creativity',
        'Attention to detail'
    ]

    return (
        <>
            <section id="left-side">
                <p>
                    Call <a href="tel:0764790505">0764790505 </a> or
                    <br/>
                    Email <a href="mailto:duica.ramona99@gmail.com">duica.ramona99@gmail.com</a>
                </p>

                <article>
                    <h2>ABOUT ME</h2>
                    <p>
                        I am a fresh graduate of Faculty of Electronics, Telecommunications and
                        Information Technology and I am responsible and eager to learn new
                        technologies and start a career.
                    </p>
                </article>

                <article>
                    <h2>PERSONAL PROJECTS</h2>
                    {
                        personalProjects.map(project => (
                            <PersonalProjects key={project.details} data={project} />
                        ))
                    }
                </article>

                <article>
                    <h2>WORK EXPERIENCE</h2>

                    {/* child component */}
                    {
                        jobs.map(job => (
                            <WorkExperience key={job.title} data={job} />
                        ))
                    }


                    {/*<WorkExperience data={jobs[0]}*/}
                    {/*      title={jobs[0].title}*/}
                    {/*      period={jobs[0].period}*/}
                    {/*      details={jobs[0].details}*/}
                    {/*      keywords={jobs[0].keywords}*/}
                    {/*/>*/}
                    {/* title e un prop */}

                </article>



                <article>
                    <h2>SOFT SKILLS</h2>
                    <CustomList data={softSkills} />
                    <span>* * *</span>
                </article>

            </section>
        </>
    )
}