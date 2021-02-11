import React from 'react';
import Container from './reusableComponents/Container';

const Nav = ({hiddenMenu, setHiddenMenu, itemCount}) => {

    return (
        <nav>
        <Container>
        <h2>Ayakkabı<span>.</span></h2>
        <div className="menuWrapper" onclick={() => setHiddenMenu(!hiddenMenu)}>
        <i className={hiddenMenu ? "fas fa-times fa-lg" : "fas fa-shopping-cart fa-lg"}></i>
        <p>{itemCount > 0 && itemCount }</p>
        </div>
        </Container>
        </nav>
    );
};

export default Nav;