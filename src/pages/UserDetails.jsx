import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowRoundBack, IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { getPostsByUser } from '../redux/postsSlice';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Posts from '../components/Posts'
import { getAllUsers } from '../redux/userSlice';
import AddPostModal from '../components/AddPostModal';

function UserDetails() {

  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // * getting posts data
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.posts);

  // * getting users data
  const { users } = useSelector((store) => store.user);

  // * getting matching username
  const getUserName = () => {
    const user = users.find((user) => user.id == userId);
    return user ? user.name : '';
  };
  // * adding post modal
  const handleAddPost = (postData) => {
    console.log('Adding post:', postData);
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // * when page renders
  useEffect(() => {
    dispatch(getPostsByUser(userId))
    dispatch(getAllUsers())
  }, [])


  return (
    <div className='bg-gradient-to-r from-blue-100 to-green-50 pt-8 pb-8 '>
      <div className=' mx-8 flex flex-row items-center '>
        <div className='flex flex-row items-center'>
          <Link to={'/'}><IoMdArrowRoundBack className='goBack' /></Link>
        </div>
        <div className='flex flex-grow mr-16 justify-center'>
          <h1 className='font-bold font-abril gradient-text text-3xl  ml-16'>{getUserName()}</h1>
        </div>
        <div className=''>
          <IoMdAddCircle className='sm:size-20 size-16 fill-blue-950 hover:fill-blue-800 cursor-pointer hover:-translate-y-1 hover:scale-110 duration-200' onClick={openModal} />
        </div>
        <AddPostModal isOpen={isModalOpen} closeModal={closeModal} addPost={handleAddPost} />
      </div>
      <Loading />
      <div className='transition-all'>
        {posts && posts.map((post) => (
          <Posts post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default UserDetails