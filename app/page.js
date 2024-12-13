"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const page = () => {
  const [t, setT] = useState("");
  const [taskArr, setTaskArr] = useState([]);

  function addToDo(e) {
    e.preventDefault();

    setTaskArr(function(temp){
      const newArr = [...temp, t];
      return newArr;
    })

    setT("");
  }

  function render() {
    const elements = taskArr.map((task, index) => { 
      return (
        <>
          <li key={task} className='flex items-center'>
            <div className="w-5 h-5 rounded-full border-2 border-veryDarkGrayishBlue1 mr-3 cursor-pointer"></div>
            <p> { task } </p>
          </li>
          {
            index+1 == taskArr.length ? "" : <hr className='mb-3 mt-3 border-none outline-none h-[1px] bg-veryDarkGrayishBlue1'/>
          } 
          
        </>
      )
     });

     return elements;
  }

  return (
    <main className='w-screen h-screen'>
      <div className='w-screen h-60 bg-desktopBgDark bg-cover'></div>
      <div className='mx-auto max-w-xl -mt-44'>
        <div id="header" className='flex items-center justify-between w-full mb-7'>
          <p id="heading" className='text-[2rem] font-semibold text-white -tracking-wide'>T O D O</p>
          <Image src="icon-sun.svg" width={30} height={30} alt=""/>
        </div>
        <div id="inputContainer" className='w-full h-12 bg-veryDarkBlue rounded'>
          <form className='w-full h-full' onSubmit={e=>addToDo(e)}>
            <input onChange={ (e) => setT(e.target.value) } value={t} autoComplete='off' id="enteredTask" type="text" placeholder='Create a new todo...' className='text-white bg-transparent w-full h-full pl-5 focus:outline-none caret-white' />
          </form>
        </div>
        {
          taskArr.length > 0 && <div id="taskListContainer" className='w-full p-5 bg-veryDarkBlue mt-5 rounded shadow-[rgba(0, 0, 0,0.3)] shadow-lg text-white'>
          <ol>
            { render() }
          </ol>
        </div> 
        }
      </div>
    </main>
  )
}

export default page
