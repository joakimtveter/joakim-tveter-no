import HtmlIcon from '../icons/HtmlIcon';
import CssIcon from '../icons/CssIcon';
import NextJsIcon from '../icons/NextJsIcon';
import JavaScriptIcon from '../icons/JavaScriptIcon';
import TypeScriptIcon from '../icons/TypeScriptIcon';
import ReactIcon from '../icons/ReactIcon';
import FlutterIcon from '../icons/FlutterIcon';
import DartIcon from '../icons/DartIcon';
import NestJsIcon from '../icons/NestJsIcon';

export default function TechnologiesSection() {
    return (
        <section>
            <h2>Technologies</h2>
            <p>Here are some of the technologies I use. </p>
            <ul className='technology-list'>
                <li className='technology-list__item'>
                    <HtmlIcon />
                </li>
                <li className='technology-list__item'>
                    <CssIcon />
                </li>
                <li className='technology-list__item'>
                    <JavaScriptIcon />
                </li>
                <li className='technology-list__item'>
                    <TypeScriptIcon />
                </li>
                <li className='technology-list__item'>
                    <ReactIcon />
                </li>
                <li className='technology-list__item'>
                    <NextJsIcon />
                </li>
                <li className='technology-list__item'>
                    <NestJsIcon />
                </li>
                <li className='technology-list__item'>
                    <FlutterIcon />
                </li>
                <li className='technology-list__item'>
                    <DartIcon />
                </li>
            </ul>
        </section>
    );
}
