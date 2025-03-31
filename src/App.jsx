import React from 'react'
import SideBar from './Components/SideBar'
import Main from './Components/Main'

const App = () => {
  return ( 
   <div className='flex overflow-y-hidden flex-row max-h-screen-screen w-full'>
   <SideBar/>
   <Main/>
   </div>
  )
}

export default App