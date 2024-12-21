
import React, { useState } from 'react'

const App = () => {
  const [username, setusername] = useState(' ')
  const [details, setDetails] = useState(' ')
  const [imageUrl, setImageUrl] = useState(' ')

  const [allusers, setallusers] = useState([])
    const sumbithandler =(e)=>{
      e.preventDefault()
      const newarr = [...allusers,{username,details,imageUrl}]
      setallusers(newarr)
      
      setusername('')
      setDetails(' ')
      setImageUrl(' ')

      



      
    }
  return (
    
    <div>
      <form onSubmit={(e)=>{
        sumbithandler(e)
      }} className='p-4'>

        <input className='border-2 border-black px-4 py-2 rounded text-xl' type="text" placeholder='enter user name' value={username} onChange={(e)=>{
          setusername(e.target.value)
        }} />
        <input className='border-2 border-black px-4 py-2 rounded text-xl' type="text" placeholder='enter details' value={details} onChange={(e)=>{
          setDetails(e.target.value)
        }} />
        <input className='border-2 border-black px-4 py-2 rounded text-xl' type="text" placeholder='enter url' value={imageUrl} onChange={(e)=>{
          setImageUrl(e.target.value)
        }} />
        <button className='text-xl bg-black text-white px-4 py-2 rounded mt-2'>sumbit</button>
      </form>
      <div className='mt-2 p-4 flex-col justify-between bg-emerald-50'>
        {allusers.map (function (elem) {
          return <div className='inline-block m-3 bg-white p-4 text-center rounded'>
                <img  className ='h-10 w-10 rounded-full text-center object-cover mb-4'src={elem.imageUrl} alt="" />
                <h1 className='text-xl mb-2 font-semibold'>{elem.username}</h1>
                <p className='text-sm font-medium'>{elem.details}</p>
          </div>

        })
          
        }
      </div>
    </div>
  )
}

export default App
