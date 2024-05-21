import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../redux/userSlice';
import User from '../components/User';
import Loading from '../components/Loading';


function HomePage() {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (

    <div className=' flex flex-col m-0 bg-gradient-to-r from-blue-100 to-green-50'>

      {/* header */}
      <div className='home-page'>Home Page</div>
      {/* loading state */}
      <Loading />
      {/* mapping for each user */}
      <div className="mx-10 md:mx-20 sm:mx-28 my-10 grid sm:grid-col-1 sm:gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-4">
        {users && users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div >
    </div>
  )
}

export default HomePage