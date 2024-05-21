import React from 'react';
import { IoMdRemoveCircle } from "react-icons/io"


function SelectedPost({ post, onDelete }) {
    const { id, title, body } = post;

    const handleDeleteClick = () => {
        onDelete(id);
      };

    // ! here I have a long text, because json-placeholder doesn't provide with such a long body which have demanded in my task
    return (
            <div className='lg:mx-44 sm:mx-20 mx-10 flex justify-center items-center'>
                <div className='bg-gradient-to-r to-blue-100 from-green-100 pt-8 flex flex-col items-center justify-center font-sans shadow-xl rounded-lg my-3  p-3 pb-8  mb-10'>
                    <h2 className='mb-5 font-bold font-rubik text-blue-950 sm:text-2xl text-xl text-center mx-6'>{title}</h2>
                    <p className='font-rubik indent-14  text-center  flex md:mx-20 mx-10 items-middle justify-center'>{`${body} On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to."On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted."`}</p>
                    <div className='flex justify-end mt-7'>
                        {/* <Link className='button ' to={`/user/${userId}`}><IoMdRemoveCircle className='size-8' onClick={handleDeleteClick}/> Remove Post</Link> */}
                        <button className='button' onClick={handleDeleteClick}>
                        <IoMdRemoveCircle className='size-8' /> Remove Post
                    </button>
                    </div>
                </div>
            </div>
    )
}

export default SelectedPost