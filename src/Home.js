import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className='heme'>
            
            <div className="home__container">
                <img className='home__image' src={require('./images/banner03.jpg').default} alt='Amazon Banner' />
            </div>
        </div>
    )
}

export default Home;
