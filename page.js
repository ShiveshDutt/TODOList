"use client"
import React, { useState } from 'react'

const page = () =>{

  const[tittle, settittle] = useState("")
  const[decs, setdecs] = useState("")
  const[maintask, setmainTask] = useState([])


  const submitHandler = (e)=>{
    e.preventDefault();
    setmainTask([...maintask, {tittle, decs}]);
    settittle("");
    setdecs("");
    console.log(maintask)
  }

  const deleteHandler = (i)=>{
    let copyTask = [...maintask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }


  let renderTask = <h2>No Task Available</h2>

  if(maintask.length>0){
    renderTask =  maintask.map((t,i)=>{

        return(
          <li  key ={i} className='flex items-center justify-between mb-5'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.tittle}</h5>
          <h6 className='text-lg font-medium'>{t.decs}</h6>

        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)
        }}
        className='bg-red-400 w-7 text-white px-4 py-5 rounded font'>Delet Task</button>
        </li>

        ) 

      })
    }

  return (
    <>

    <h1 className='bg-black text-white p-5 font-bold text-center'>Shivesh Dutt Sharma's ToDo List</h1>
    <form onSubmit={submitHandler}>
      <input type="text"
       className='text-2xl border-zinc-800 boredr-4 m-5 px-4 py-2 '
       placeholder='Enter Title Here'
       value={tittle}
       onChange={(e)=>{
        settittle(e.target.value)
       }}
       />
       <input type="text"
       className='text-2xl border-zinc-800 boredr-4 m-5 px-4 py-2 '
       placeholder='Enter Discription Here'
       value = {decs}
       onChange={(e)=>{
        setdecs(e.target.value)
       }}
       />
       <button className="bg-black text-white px-3 py-2 font-bold rounded m-5">
        Enter</button>
    </form>

    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>

    </div>

    </>
  )
}

export default page