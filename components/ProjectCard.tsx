export default function ProjectCard({
    imageSrc,
    title,
    description,
    githubLink,
    projectLink,
}: {
    imageSrc: string;
    title: string;
    description: string;
    githubLink: string;
    projectLink: string;
}) {
    // TODO: WHEN PROJECT PAGE IS READY, IMPLEMENT IMAGE AND TITLE CLICK TO REDIRECT TO PROJECT PAGE

    return (
        <>
            <li className='project-card'>
                <img className='project-card__image' src={imageSrc} alt={`Screenshot of ${title}`} />
                <h3 className='project-card__title'>{title}</h3>
                <p className='project-card__description'>{description}</p>
                <div className='project-card__footer'>
                    <a href={projectLink}>View Project</a>
                    <a href={githubLink}>GitHub repo</a>
                </div>
            </li>
        </>
    );
}
