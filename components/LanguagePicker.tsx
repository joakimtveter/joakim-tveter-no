export default function LanguagePicker({ currentLocale }: { currentLocale: string }) {
    return (
        <>
            <button>{currentLocale === 'no' ? 'en' : 'no'}</button>
        </>
    );
}
