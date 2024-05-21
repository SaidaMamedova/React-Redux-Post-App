import React from 'react'
import { Link } from 'react-router-dom'

function User({ user }) {

  const { id, name, username, email, address } = user;

  return (
    <div className="bg-slate-50 shadow-md sm:w-100 md:w-50 p-8 border rounded-3xl sm:m-2 mb-3 sm:h-80 lg:h-72 hover:bg-slate-200 hover:cursor-pointer hover:ml-1 hover:mb-1 transition-all hover:-translate-y-1 hover:scale-100 duration-300 ">
      <div className="uppercase  md:text-base sm:text-xl mb-3 sm:mb-5 xl:mb-7 xl:text-lg text-blue-950 font-rubik font-[550] truncate hover:text-clip">
        {name}</div>
      <p className="mb-4 text-lg font-rubik  text-blue-600 truncate hover:text-clip">
        {email}</p>
      <p className="flex flex-row font-rubik mt-4 text-[18px]  text-gray-500 truncate hover:text-clip"> <span className='flex font-bold mr-2 '>Username: </span>
        {username}</p>
      <p className="flex flex-row font-rubik mt-4 text-[18px]  text-gray-500 truncate hover:text-clip"> <span className='flex font-bold mr-2'>Address: </span>
        {`${address.city} /
        ${address.street}`}</p>
      <div className=' flex mt-6 justify-center items-center '>
        <Link to={`/user/${id}`} className='items-center justify-center font-bold h-5 w-14 py-5 px-10 border rounded-2xl text-md text-slate-500 bg-gradient-to-r from-blue-100 to-green-50 flex shadow-lg shadow-slate-400 hover:from-blue-200 hover:to-green-100 hover:-translate-y-1 hover:scale-100 duration-300'>Details</Link>
      </div>
    </div>
  )
}

export default User