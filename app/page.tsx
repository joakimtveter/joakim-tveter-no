import IntroSection from '../components/sections/IntroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TechnologiesSection from '../components/sections/TechnologiesSection';

export default function Page() {
    return (
        <>
            <main id='main-content'>
                <IntroSection />
                <TechnologiesSection />
                <ProjectsSection />
            </main>
        </>
    );
}
