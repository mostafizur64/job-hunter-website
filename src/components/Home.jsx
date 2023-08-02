import React from 'react';
import Banner from './Banner';
import JobCategory from './JobCategory';
import Features from './Features';
import Header from './Header';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Banner/>
          <JobCategory></JobCategory>
          <Features/>
        </div>
    );
};

export default Home;