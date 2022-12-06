import { ReactNode } from 'react';

export default function MainNavigation({ children }: { children: ReactNode }) {
    return (
        <>
            <nav className='main-navigation'>
                <ul className='main-navigation__list'>{children}</ul>
            </nav>
        </>
    );
}
