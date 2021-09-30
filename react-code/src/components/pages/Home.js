import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';
import About from '../About';

function Home() {
    return (
       <>
       <MainSection></MainSection>
       <Cards/>
       <About/>
       </>
    )
}

export default Home
