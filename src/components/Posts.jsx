import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


function Posts({ post }) {

  const { userId, id, title } = post;


  return (
    <div>
      <Link to={`/posts/${userId}/${id}`} >
        <li className='hover:-translate-y-1 hover:scale-100 duration-300 flex flex-row items-center justify-between sm:h-20 md:h-26 h-32 font-sans bg-gradient-to-r from-green-100 to-blue-200 hover:to-blue-300 hover:shadow-inner shadow-lg border-0 rounded-lg mt-4 mx-20 xl:mx-60 sm:mx-40 p-3'>
          <div className="flex items-start">
            <RiDeleteBinLine className='hover:shadow-md size-6 fill-blue-800 m-2' />
            <p className='ml-6 mt-2 flex items-center justify-center md:text-lg text-base text-blue-950 font-semibold'>{title}</p>
          </div>
          <IoIosArrowForward className='size-6 flex text-end fill-blue-900' />
        </li>
      </Link>
    </div>
  )
}

export default Posts