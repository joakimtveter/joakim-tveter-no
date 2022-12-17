import Image from 'next/image';
export default function IntroSection() {
    return (
        <section id='intro-section' className='intro-section'>
            <div>
                <h1>
                    Hi, my name is <br />
                    <span className='display'>Joakim Tveter</span>
                </h1>
                <p className='intro-text'>
                    My name is pronaunced like /jəʊ.ə.kɪm/. I work as a mobile and front-end developer at Netpower,
                    where I create amazing and accessible user experiences. I currently prusue for a Higher Professional
                    degree in Front-end Development at Noroff.
                </p>
            </div>
            <Image src='/Joakim-Tveter-1080px.jpg' height='400' width='400' alt='Portrait of me, Joakim Tveter' />
        </section>
    );
}
