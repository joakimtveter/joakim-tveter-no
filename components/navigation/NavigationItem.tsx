import { ReactNode } from 'react';
import Link from 'next/link';

export default function NavigationItem({ name, link, children }: { name: string; link: string; children?: ReactNode }) {
    return (
        <>
            <li className='main-navigation__list-item'>
                <Link href={link}>{name}</Link>

                {children && <ul className='main-navigation__second-tier-list'>{children}</ul>}
            </li>
        </>
    );
}
