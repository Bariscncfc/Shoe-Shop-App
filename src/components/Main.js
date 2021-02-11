import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import CardContainer from './CardContainer';
import Nav from './Nav';
import Container from './reusableComponents/Container';



const Main = () => {
    return (
        <section className="hero">
         <Nav />
         <Container>
         <CardContainer />
         </Container>
        </section>
    )
}

export default Main;
