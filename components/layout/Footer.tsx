export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='site-footer'>
                <div className='copyright-footer'>
                    <p className='copyright-text'>&copy;{year} - Joakim Tveter</p>
                </div>
            </footer>
        </>
    );
}
