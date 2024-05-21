import React from 'react'

function Comments({ comment }) {
    const { name, email, body } = comment;
    
    return (
        <div className='border-[3px] rounded-lg border-zinc-900 md:py-5 py-3 px-4  mb-3'>
            <div className='flex sm:justify-between md:flex-row flex-col'>
                <p className='font-bold'>{name}</p>
                <p className='text-blue-500'>{email}</p>
            </div>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comments