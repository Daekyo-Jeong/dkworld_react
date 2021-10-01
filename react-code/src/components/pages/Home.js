import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';
import Introduce from '../Introduce';

function Home() {
    return (
       <>
       <MainSection></MainSection>
       <Cards/>
       <Introduce/>
       </>
    )
}

export default Home
