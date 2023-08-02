import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faLocationDot,faDollarSign} from '@fortawesome/free-solid-svg-icons'
import Header2 from './Header2';

const AppliedJobs = () => {
    // // get data form localStorage 
    let applyCard = [];
    const storedCard = localStorage.getItem('appllydJob');
    if (storedCard) {
        applyCard = JSON.parse(storedCard);
    }
 

    const [filter,setFilter] = useState("")

 


    return (
        <div>
            <Header2></Header2>
          
                <div className='flex justify-end px-16 mt-32 '>
                    <select className='border w-[150px] h-[65px] bg-slate-100 rounded-lg' onClick={(event)=>setFilter(event.target.value)}>
                        <option value="">All</option>
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
         
           {
            applyCard.filter(job=>{
                switch (filter) {
                    case 'Remote':
                    return job.remoteOrOnsite==='Remote';
                    case 'Onsite':
                    return job.remoteOrOnsite==='Onsite'
                    default:
                        return job;
                }
            }).map((job) => {
                const {id,companyLogo,companyName,jobTitle,location,remoteOrOnsite ,employmentType,salary}= job;
                return (
                    <>
                   
                   
                    <div className='flex justify-between items-center px-12 w-[1200px] h-[300px] mx-auto border p-8 mt-8'>
                        
                        <div >
                            <div className='flex gap-8'>
                                <img className='w-[240px] h-[240px] bg-slate-100 object-none'
                                    src={companyLogo} alt="" />
                                <div className='mt-14'>
                                    <h3 className='text-2xl'>{jobTitle}</h3>
                                    <p className='text-2xl text-slate-500 mt-2'>{companyName}</p>
                                    <div className='gap-4 flex mt-4 text-blue-300'>
                                        <button className='btn-info'>{employmentType}</button>
                                        <button className='btn-info'>{remoteOrOnsite}</button>
                                    </div>
                                    <div className='flex space-x-2 mt-6 text-xl text-slate-500'>
                                        <p><img className=' inline-flex' src="https://i.ibb.co/CVHv6Pw/Frame-4.png" alt=""/>  {location}</p>
                                        <p><img className=' inline-flex'src="https://i.ibb.co/3TQq6R0/Frame.png" alt="" /> {salary}</p>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                        <div>
                        <button  className='btn-success mt-6'>View Details</button>
                        </div>
                    </div></>
                )
            })
           }
        

        </div >
    );
};

export default AppliedJobs;