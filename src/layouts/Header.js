function Header(){
    return(
        <header className="header">
            <nav className="navbar" >
                <a href="#!" className="navbar__logo">
                    <img src="./assets/images/logo/logo.svg" className="navbar__logo__iamge" />
                </a>
                <ul className="navbar__nav">
                    <li className="navbar__nav__item active">
                        <a href="./" className="navbar__nav__item__link">Home</a>
                    </li>
                    <li className="navbar__nav__item">
                        <a href="#!" className="navbar__nav__item__link">Article</a>
                    </li>
                    <li className="navbar__nav__item">
                        <a href="#!" className="navbar__nav__item__link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;