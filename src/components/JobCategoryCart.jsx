import React from 'react';

const JobCategoryCart = ({category}) => {
    const { id, name, image, number } = category;
    return (
        <div>
            <div className=' border p-10 lg:w-[311px] lg:h-[243px] w-full h-full rounded-md bg-slate-50'>
                <img className='h-16 w-16' src={image} alt="" />
                <h2 className='mt-8'>{name}</h2>
                <p className='mt-6 text-slate-400'>{number} + Jobs Available</p>
            </div>
          
        </div>

    );
};

export default JobCategoryCart;

