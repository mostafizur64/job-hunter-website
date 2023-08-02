import React, { useEffect } from 'react';

const Banner = () => {
 
    
    return (
        <div>
               <div className='bg-slate-50 px-12  mx-auto flex justify-between items-center '>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div>
                        <h1 className='text-7xl '>One Step <br /> Closer To Your <br /> <span className='text-blue-300'> Dream Job</span></h1>
                        <p className='text-xl mt-6'>Explore thousands of job opportunities with all the information you need. Its your future.
                            Come find it. Manage all your job application from start to finish.</p>
                        <button className='btn-primary mt-8'>Get Started</button>

                    </div>
                    <div>
                        <img className='w-[816px] h-[600px] '
                            src="https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png" alt="P3-OLGJ1-copy-1"/>
                    </div>
                </div>
            </div>
            {/* <div className=' px-12  py-14'>
           {
            data.map((jobCategory) => {
                return <JobCategory key={jobCategory.id} jobCategory={jobCategory} />
            })
           }
            </div> */}
        </div>
    );
};

export default Banner;