import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const date =new Date()
  const dateName =date.getDate();
  const dateMonth =date.getMonth();
  const dateFullYear =date.getFullYear();

  return (
    <>
      <div className='bg-yellow-300 m-3 p-3 rounded shadow-lg'>
        <h2 className='text-2xl font-semibold text-center py-2'>Call Family</h2>
        <p className='text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quod et beatae sunt, totam cum ea suscipit amet voluptatum animi!</p>
        <p className=''>{dateName + '/' + dateMonth + '/' + dateFullYear}</p>
        
      </div>
    </>
  )
}

export default App
