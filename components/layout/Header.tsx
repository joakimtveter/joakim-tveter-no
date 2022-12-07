import LanguagePicker from '../LanguagePicker';
import MainNavigation from '../navigation/MainNavigation';
import NavigationItem from '../navigation/NavigationItem';

export default function Header() {
    return (
        <>
            <header className='page-header'>
                <MainNavigation>
                    <NavigationItem name='Home' link='/' />
                    <NavigationItem name='My Projects' link='/projects' />
                </MainNavigation>
            </header>
        </>
    );
}
