import React from 'react';
import { render } from 'react-dom';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Scatter, Tooltip, XAxis } from 'recharts';
import Header from './Header';
const data = [
    {
      name: 'First Assignment',
      mark: 57,
      assignment_number:60,
     
    },
    {
      name: 'Second Assignment',
      mark: 59,
      assignment_number:60,
      
    },
    {
      name: 'Third Assignment',
      mark: 60,
      assignment_number:60,
    
     
    },
    {
      name: 'Four Assignment',
      mark: 60,
      assignment_number:60,
    
    },
    {
      name: 'Five Assignment',
      mark: 57,
      assignment_number:60,
     
    },
    {
      name: 'Six Assignment',
      mark: 54,
      assignment_number:60,
     
    },
    {
      name: 'Seven Assignment',
      mark: 60,
      assignment_number:60,
     
    },
    {
      name: 'Eight Assignment',
      mark: 60,
      assignment_number:60,
     
    },
    {
      name: 'Nine Assignment',
      mark: 60,
      assignment_number:60,
     
    },
  ];
const Statistics = () => {
   
    return (
        <>
        <Header></Header>
       <div className='lg:px-12 items-center justify-center flex mx-auto :w-[50%]'>
       <ComposedChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
            <XAxis dataKey="name" scale="band" />
          
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="name" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="assignment_number" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="mark" stroke="#ff7300" />
         
        </ComposedChart>
       </div>
        </>
    );
        
     
};

export default Statistics;