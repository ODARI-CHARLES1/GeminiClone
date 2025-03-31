import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import { Context } from '../context/context'
const SideBar = () => {

    const [extended,setExtended]=useState(false);
    const {OnSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context);
    
    const loadPrompt=async (prompt)=>{
        setRecentPrompt(prompt)
        await OnSent(prompt)
    }

    //function for toggling between the sidebar's size
    const handleExtended=()=>{
        setExtended((prev)=>!prev)
    }

    useEffect(()=>{
        localStorage.setItem("prevPrompt",JSON.stringify(prevPrompt));
    },[])

  return (
    <div className=' lg:flex sm:hidden font-outift h-screen  flex-col justify-between  py-[25px] px-[15px] bg-sidebar '  > 
        <div>
            <div >
                <img className='w-[20px] block ml-2.5 cursor-pointer  ' onClick={handleExtended} src={assets.menu_icon} alt="menu-icon"/>
                <div  onClick={()=>newChat()}  className='mt-2.5 inline-flex items-center gap-2.5 py-2.5 px-[15px] text-[14px] text-gray-400 cursor-pointer rounded-[50px] bg-slate-200' >
                    <img className='w-[20px]' src={assets.plus_icon} alt="plus-icon" />
                    {extended?<p>New Chat</p>:null}
                </div>
               {/*extended is for toggle between the sidebar size*/}
                {
                    extended?<div className='flex flex-col '>
                    <p className='mt-7.5 mb-5'>Recent</p>
                       {
                        prevPrompt.length?prevPrompt.map((item,index)=>(
                        <div onClick={()=>loadPrompt(item)} className='flex items-center gap-2.5 p-2.5 pr-8 rounded-[50px] cursor-pointer hover:bg-slate-200'>
                            <img className='w-[20px]' src={assets.message_icon} alt="" />
                            <p key={index} >{item.length>18?item.slice(0,18)+"...":item}</p>
                        </div>
                        )):null
                       } 
                </div>:null
                }
            </div>
        </div>
        <div className='flex flex-col justify-between gap-2.5'>
            <div className=' flex items-center gap-2.5 p-2.5 pr-8 rounded-[50px] cursor-pointer hover:bg-slate-200'>
                <img className='w-[20px]' src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>
            <div className='flex items-center gap-2.5 p-2.5 pr-8 rounded-[50px] cursor-pointer hover:bg-slate-200'>
                <img className='w-[20px]' src={assets.history_icon} alt="" />
              {extended?  <p>Activity</p>:null}
            </div>
            <div>

            </div>
            <div className='flex items-center gap-2.5 p-2.5 pr-8 rounded-[50px] cursor-pointer hover:bg-slate-200'>
                <img className='w-[20px]' src={assets.setting_icon} alt="" />
              {extended?  <p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default SideBar;

