import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   /*const [count, setCount] = useState(0) */

  return (
    
       <div className='grid grid-cols-3 md:grid-cols-3'>
       <div className='w-28ch-28 b`g-amber-600'>one</div>
       <div className='w-28ch-28 bg-amber-950'>two</div>
       <div className='w-28ch-28 bg-amber-200'>three</div>
    </div>

  )
}

export default App
