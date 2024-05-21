import { React, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdAddComment } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByUser, deletePostById } from '../redux/postsSlice';
import SelectedPost from '../components/SelectedPost';
import Loading from '../components/Loading';
import { getAllUsers } from '../redux/userSlice';
import { getCommentsByPost } from '../redux/commentsSlice';
import Comments from '../components/Comments';
import AddCommentModal from '../components/AddCommentModal';


function PostDetails() {

  const dispatch = useDispatch();
  const { userId, postId } = useParams();
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const navigate = useNavigate();

  // * getting posts data
  const { posts } = useSelector((store) => store.posts);

  // * getting users data
  const { users } = useSelector((store) => store.user);

  // * getting matching username
  const getUserName = () => {
    const user = users.find((user) => user.id == userId);
    return user ? user.name : '';
  };
  // * getting corresponfing post's comments
  const { comments } = useSelector((store) => store.comments);

  // * finding matching post by its id
  const post = posts.find(post => post.id === parseInt(postId));

  // * toggle comment visibility
  const toggleCommentsVisibility = () => {
    setCommentsVisible(!commentsVisible);
  };
  // * delete post by its id
  const handleDeletePost = () => {
    dispatch(deletePostById(postId));
    navigate(`/user/${userId}`);
  };

  // * comment modals
  const handleOpenCommentModal = () => {
    setIsCommentModalOpen(true);
  };
  const handleCloseCommentModal = () => {
    setIsCommentModalOpen(false);
  };

  useEffect(() => {
    dispatch(getPostsByUser(userId))
    dispatch(getAllUsers())
    dispatch(getCommentsByPost(postId))
  }, [userId, postId])

  return (
    <div className='bg-gradient-to-r from-blue-100 to-green-50 pt-8 pb-8'>
      <div className=' mx-8 flex flex-row items-center '>
        <div className='flex flex-row items-center'>
          <Link to={`/user/${userId}`}><IoMdArrowRoundBack className='goBack' /></Link>
        </div>
        <div className='flex flex-grow mr-16 justify-center'>
          <h1 className=' font-bold font-abril gradient-text text-3xl  ml-6'>{getUserName()}</h1>
        </div>
      </div>
      <Loading />
      <div>
        {/* calling for clicked post */}
        {post && <SelectedPost post={post} onDelete={handleDeletePost} />}
        {/*comments section*/}
        <div className='flex lg:mx-44 sm:mx-20  mx-10 flex-col' >
          {/* comments button */}
          <div className='flex justify-between  '>
            <button className='flex mb-3 button w-44 ' onClick={toggleCommentsVisibility}><FaComments className='size-8 mr-1' />
              {commentsVisible ? 'Hide Comments' : 'Show Comments'}
            </button>
            <div>
              <button className='flex mb-3 button w-44' onClick={handleOpenCommentModal} > <MdAddComment className='size-7 mr-1' />Add Comment</button>
              <AddCommentModal
                isOpen={isCommentModalOpen}
                closeModal={handleCloseCommentModal} />
            </div>
          </div>
          {/*calling corresponding comments of post*/}
          <div className={`transition-all duration-700 ease-in-out ${commentsVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            {comments && comments.map((comment) => (
              <Comments comment={comment} key={comment.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
