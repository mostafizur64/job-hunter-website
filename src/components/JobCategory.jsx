import React, { useEffect, useState } from 'react';
import JobCategoryCart from './JobCategoryCart';

const JobCategory = () => {
    const [jobCategory,setJObCategory] = useState([])
    useEffect(()=>{
        fetch('jobCategory.json')
        .then(res=>res.json())
        .then(data =>setJObCategory(data))
        
    },[])
    
    return (
        <div>
            <div className='mt-32 '>
           <div className='text-center'>
            <h1 className='text-5xl text-black font-semibold'>Job Category List</h1>
            <p className='text-xl mt-4 text-slate-400'>Explore Thousands of job opportunities with all the information you need. Its your future</p>
           </div>
           <div className='grid lg:grid-cols-4 gap-7 mx-auto px-12 py-14'>
           {
            jobCategory.map(category=><JobCategoryCart key={category.id} category={category}></JobCategoryCart>)
           }
           </div>
        </div>
        </div>
    );
};

export default JobCategory;