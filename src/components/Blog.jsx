import React from 'react';
import Header from './Header';

const Blog = () => {
    return (
        <div>
          <Header/>
        <div className='grid lg:grid-cols-4 gap-4 px-12 mt-12'>
          <div className='border w-full rounded-lg bg-slate-200 p-4 text-black'>
            <h2 className='text-2xl font-semibold'>When should you use context API?</h2>
            <div className='border-b-2 border-indigo-500 mt-3'></div>
            <p className='text-xl '>when you need to share state between lot's of components with a lot of nesting. 
Most of the time, the data you have in one component will 
only be relevant to its children, So passing it in props is more indicative and nicer.</p>
            </div>
          <div className='border w-full rounded-lg bg-slate-200 p-10 text-black'>
            <h2 className='text-2xl font-semibold'>what is custom hook?</h2>
            <div className='border-b-2 border-indigo-500 mt-3'></div>
            <p className='text-xl '>A custom hook is a special JavaScript function whose name starts with 'use' 
and can be used to call other hooks.
Hooks are reusable functions. When you have component logic that needs to be 
used by multiple components, we can extract that logic to a custom Hook.</p>
            </div>
          <div className='border w-full rounded-lg bg-slate-200 p-10 text-black'>
            <h2 className='text-2xl font-semibold'>what is useRef?</h2>
            <div className='border-b-2 border-indigo-500 mt-3'></div>
            <p className='text-xl '>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference 
(aka ref). A reference is an object having a special property current .</p>
            </div>
          <div className='border w-full rounded-lg bg-slate-200 p-10 text-black'>
            <h2 className='text-2xl font-semibold'>what is useMemo?</h2>
            <div className='border-b-2 border-indigo-500 mt-3'></div>
            <p className='text-xl '>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.</p>
            </div>
          
        </div>
        </div>
    );
};

export default Blog;