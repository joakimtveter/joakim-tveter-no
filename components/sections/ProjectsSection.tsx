import Link from 'next/link';
import ProjectCard from '../ProjectCard';

export default function ProjectsSection() {
    return (
        <section>
            <h2 className='section-heading'>My Projects</h2>
            <ul className='project-list'>
                <ProjectCard
                    imageSrc='/screenshot3.png'
                    title='Noroff Cross Course Project'
                    description='An ecommerce website for a fictional computer games company. 
                    A school assignment for my Higher Proffesional Degree in Front End Development at Noroff School of technology and digital media.
                    This is the final submission of the cross course project. It started off as a design task and has been built uppon several times in different subjects.'
                    projectLink='https://noroff-cms-ca.netlify.app'
                    githubLink='https://github.com/joakimtveter/noroff-cms-ca'
                />
                <ProjectCard
                    imageSrc='/screenshot2.png'
                    title='Noroff Semester Project 1'
                    description='A website for a fictional Community Science Museum. 
                    A school assignment for my Higher Proffesional Degree in Front End Development at Noroff School of technology and digital media.My task was to design a website for a fictional museum. 
                    I used it as an excuse to learn and use the Gulp taskrunner. The copy was part of the task.'
                    projectLink='https://noroff-cms-ca.netlify.app'
                    githubLink='https://github.com/joakimtveter/noroff-semester-project1'
                />
                <ProjectCard
                    imageSrc='/screenshot.png'
                    title='Noroff Project Exam 1'
                    description='A personal web development blog. 
                    A school assignment for my Higher Proffesional Degree in Front End Development at Noroff School of technology and digital media.
                    The assignment required to make a blog with minimum 12 articles. 
                    A post slider, a load more posts button, arnd a contact form with validation were also part of the assignment.'
                    projectLink='https://noroff-project-exam1.netlify.app'
                    githubLink='https://github.com/Noroff-FEU-Assignments/project-exam-1-joakimtveter'
                />
            </ul>
            {/* <Link href={'/projects'}>See all my projects</Link> */}
        </section>
    );
}
