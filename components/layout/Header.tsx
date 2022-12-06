import MainNavigation from '../navigation/mainNavigation';
import NavigationItem from '../navigation/NavigationItem';

export default function Header() {
    return (
        <>
            <header>
                <p>logo!</p>
                <MainNavigation>
                    <NavigationItem name='name1' link={'link1'}>
                        <NavigationItem name='name1-1' link={'link1-1'} />
                        <NavigationItem name='name1-2' link={'link1-2'} />
                    </NavigationItem>
                    <NavigationItem name='name2' link={'link2'} />
                </MainNavigation>
            </header>
        </>
    );
}
