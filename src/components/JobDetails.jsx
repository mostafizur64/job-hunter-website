import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header1 from './Header1'
const JobDetails = () => {

    const [job, setJob] = useState({})
    const dynamicData = useParams();
    // console.log(dynamicData.jobId)
    useEffect(() => {
        fetch('/job.json')
            .then(res => res.json()).
            then(data => setJob(data.find(job => job.id === Number(dynamicData.jobId))));
    }, []);
    console.log(job);

    const { id, companyName, jobDescription, jobResponsibilities,
        educationalRequirements, experienceRequirements,
        salary, jobTitle, phone, email,location
    } = job;

  
    // add to localStorage
    const handleAddToApply = (job) => {
        const allJobs = [];
        const alreadyExists = localStorage.getItem('appllydJob');
        const old = JSON.parse(alreadyExists)

        if (old) {

            return localStorage.setItem('appllydJob', JSON.stringify([...old, job]));
        }
        localStorage.setItem('appllydJob', JSON.stringify([job]));



    }


    return (
        <div>
            <Header1></Header1>
            <div className="px-12 mx-auto grid lg:grid-cols-3 mt-32 p-12 -gap-2]">
                <div className="col-span-2 space-y-7  p-4">
                    <p className='text-lg'><strong className='semi-bold'>Job Description:</strong>{jobDescription}</p>
                    <p className='text-lg'><strong className='semi-bold'>Job Responsibility:</strong>{jobResponsibilities}</p>
                    <p className='text-lg'><strong className='semi-bold'>Educational Requirements:</strong><br /><span className='mt-4'>{educationalRequirements}</span></p>
                    <p className='text-lg'><strong className='semi-bold'>Experiences:</strong> <br /><span className='mt-4'>{experienceRequirements}</span></p>
                </div>
                <div>
                    <div className='bg-slate-200 p-5 rounded-lg text-slate-600' >
                        <div>
                            <h2 className='text-xl font-semibold'>Job Details</h2>
                            <div className='border-b-2 border-indigo-200 mt-6'></div>
                           <div className='space-y-3 mt-6'>
                           <p ><strong>Salary:</strong> {salary}</p>
                            <p><strong>Job Title:</strong> {jobTitle}</p>
                           </div>

                        </div>
                        <div className='mt-8'>
                            <h1 className='text-xl font-semibold'>Contact Information</h1>

                            <div className='border-b-2 border-indigo-200 mt-6'></div>
                            <div className='space-y-3'>
                                <p><strong>Phone:</strong> {phone}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Address:</strong> {location}</p>
                            </div>
                        </div>
                    </div>
                    <button className='bg-slate-600 bg-gradient-to-r from-indigo-500 w-full h-16 rounded-lg mt-6' onClick={() => handleAddToApply(job)}>Apply Now</button>
                </div>

            </div>








        </div>
    );
};

export default JobDetails;