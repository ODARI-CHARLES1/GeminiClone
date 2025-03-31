import React, { useContext } from 'react'
import assets from '../assets/assets'
import { Context } from '../context/context'

const Main = () => {
  const {OnSent,recentPrompt,showResults,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='max-h-screen pb-20 flex-1'>
        <div className='flex items-center justify-between text-[22px] p-5 text-nav' >
            <p className='textt-[24px] font-bold bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent' >Odari Gemini</p>
            <img  className='w-[40px] h-[40px] rounded-full' src={assets.profile_icon} alt="user-icon" />
        </div>
        
        <div className='m-auto max-w-[900px]' >

        {!showResults?
        <>
            <div className='my-[50px] mx-5 text-[56px] text-greet font-bold-500 '>
          <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent' >Odari Gemini ☝️Hello, Dev.</span></p>
          <p>How can i help you today?</p>
        </div>
        <div className=' grid grid-cols-4 gap-[15px] p-5  '>
        <div className='  hover:bg-card-hover  h-50 p-[15px] bg-sidebar rounded-[10px] cursor-pointer relative '>
            <p className='text-nav text-[17px] '>Suggest beatiful places to see on an upcoming road trip.</p>
            <img className='w-[35px] p-1.25 absolute  bg-white  bottom-5 right-2.5 rounded-full  ' src={assets.compass_icon} alt="" />
          </div>
          <div className=' hover:bg-card-hover  h-50 p-[15px] bg-sidebar rounded-[10px] cursor-pointer relative '>
            <p className='text-nav text-[17px] '>Briefly summarize this concept: Urban Planning</p>
            <img  className='w-[35px] p-1.25 absolute  bg-white  bottom-5 right-2.5 rounded-full  ' src={assets.bulb_icon} alt="" />
          </div>
          <div className='dur hover:bg-card-hover  h-50 p-[15px] bg-sidebar rounded-[10px] cursor-pointer relative ' >
            <p className='text-nav text-[17px] '>Brainstorm team bonding activities for our work retreat</p>
            <img  className='w-[35px] p-1.25 absolute  bg-white  bottom-5 right-2.5 rounded-full  ' src={assets.message_icon} alt="" />
          </div>
          <div  className=' hover:bg-card-hover  h-50 p-[15px] bg-sidebar rounded-[10px] cursor-pointer relative '>
            <p className='text-nav text-[17px] '>Improve the readability of the following code.</p>
            <img  className='w-[35px] p-1.25 absolute  bg-white  bottom-5 right-2.5 rounded-full  ' src={assets.code_icon} alt="" />
          </div>
        </div>
        </>:
        <div className='py-0 px-[20px] overflow-y-scroll scrollbar-hide max-h-[70vh]  ' >
          <div className='my-10 flex items-center gap-5'>
            <img className='w-[40px] h-[40px] rounded-full' src={assets.profile_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className='flex items-start  gap-5'>
            <img className='w-[40px] h-[40px]' src={assets.gemini_icon} alt="" />
            {loading?
            <div className='w-full flex flex-col gap-2.5'>
                <hr className='rounded-[2px] border-0 bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-size h-5 animate-pulse '/>
                <hr className='rounded-[2px] border-0 bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-size h-5 animate-pulse '/>
                <hr className='rounded-[2px] border-0 bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-size h-5 animate-pulse '/>
            </div>:
            <p className='text-[17px] font-light leading-[1.8]'dangerouslySetInnerHTML={{ __html: resultData }}/>
            //<ReactMarkdown   remarkPlugins={[remarkBreaks]}  rehypePlugins={[rehypeRaw]}>{resultData}</ReactMarkdown>
          }
            
          </div>
        
        </div>
      }
        <div className='absolute bottom-[10px] w-full max-w-[900px] py-0 px-5 rounded-[50px] '>
          <div className='flex items-center justify-between gap-5 bg-search-box py-3 px-2 rounded-[50px] '>
            <input onChange={(e)=>setInput(e.target.value)} value={input} className='flex-1 bg-transparent border-0 outline-0 p-2 text-[18px]  ' type="text" placeholder='Enter a prompt here..' />
            <div className='flex items-center gap-4'>
              <img className='w-6 cursor-pointer' src={assets.gallery_icon} alt="" />
              <img className='w-6 cursor-pointer' src={assets.mic_icon} alt="" />
              <img onClick={()=>OnSent()} className='w-6 cursor-pointer' src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='text-[13px] mt-4 m-auto text-center font-light'>Gemini may display inaccurate info, including about people ,so double-check it responses.
          Your Privacy and Odari Gemini Apps </p>
        </div>
        </div>
    </div>
  )
}

export default Main