import { useRouter } from 'next/router';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import './globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />
            <body>
                <Header />
                <main id='main-content'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
