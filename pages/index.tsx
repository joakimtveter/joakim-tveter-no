import Footer from '../components/layout/Footer';
import IntroSection from '../components/sections/IntroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TechnologiesSection from '../components/sections/TechnologiesSection';
import Head from 'next/head';

export default function Page() {
    return (
        <>
            <Head>
                <title>Joakim Tveter | Portfolio</title>
            </Head>
            <main id='main-content'>
                <IntroSection />
                <TechnologiesSection />
                <ProjectsSection />
            </main>
            <Footer />
        </>
    );
}
