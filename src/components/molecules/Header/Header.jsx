import ClassNames from 'classnames';
import React from 'react';

import Heading from '../../atoms/Heading/Heading';

const Header = ({ iconUrl, runningTitle, pageTitle, withMask, withContentOverlap, children }) =>
    <header className={ClassNames('header', { 'header--with-mask': withMask, 'header--with-content-overlap': withContentOverlap })}>
        <img className="header__icon" src={iconUrl} role="presentation" />
        <span className="header__subtitle ">{runningTitle}</span>
        <Heading level={1} text={pageTitle} />
        <section className="header__preamble">{children}</section>
    </header>;

export default Header;