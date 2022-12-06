import { ReactNode } from 'react';

export default function NavigationItem({ name, link, children }: { name: string; link: string; children?: ReactNode }) {
    return (
        <>
            <li className='main-navigation__list-item'>
                <a href={link}>{name}</a>

                {children && <ul className='main-navigation__sub-list'>{children}</ul>}
            </li>
        </>
    );
}
