import React, { useEffect, useState } from 'react';
import SingleJobFeature from './SingleJobFeature';

const Features = () => {
    const [jobs, setJobs] = useState([]);

    const [showAll, setShowAll] = useState(4);
   
    useEffect(() => {
        fetch('job.json').then(res => res.json()).then(data => setJobs(data));   
    }, []);
   
    const HandleShowAllData=()=>{
      setShowAll(jobs?.length);
       
    }

    return (
        <div className='px-12 mt-32'>
            <div className='text-center'>
                <h1 className='text-5xl text-black font-semibold'>Featured Jobs</h1>
                <p className='text-xl mt-4 text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-4'>
                {
                    jobs.slice(0,showAll).map(job => <SingleJobFeature key={job.id} job={job} ></SingleJobFeature>)
                }
            </div>
            <button onClick={HandleShowAllData} className='btn-primary mt-12 items-center justify-center flex mx-auto'>Show More</button>
        </div>
    );
};

export default Features;