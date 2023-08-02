import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleJobFeature = ({ job }) => {
    const navigate= useNavigate();
    const { id, companyLogo, jobTitle, companyName, location, salary,remoteOrOnsite,employmentType } = job;
    
    return (
            <div className=' border w-full h-full rounded-md bg-slate-50 p-6 mt-8'> 
                <img className='w-[116px] h-[40px]' src={companyLogo} alt="logo" />
               <div className='mt-9 space-y-2'>
               <h3>{jobTitle}</h3>
                <p>{companyName}</p>
               </div>
                <div className='gap-4 flex mt-4'>
                    <button className='btn-info'>{remoteOrOnsite}</button>
                    <button className='btn-info'>{employmentType}</button>
                </div>
                <div className='flex gap-6 mt-4'>
                    <p><img className=' inline-flex' src="https://i.ibb.co/CVHv6Pw/Frame-4.png" alt=""/> {location}</p>
                    <p><img className=' inline-flex'src="https://i.ibb.co/3TQq6R0/Frame.png" alt="" /> {salary}</p>
                </div>
                <button onClick={()=>navigate(`jobDetails/${id}`)} className='btn-success mt-6'>View Details</button>
                
            
        </div>
    );
};

export default SingleJobFeature;