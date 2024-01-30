
export default function Header({links}) {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container__logo">
                    <a href="/">
                        <img src="/img/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="header__container__links">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}