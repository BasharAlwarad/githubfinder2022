import { useEffect, useContext } from 'react'

import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

import UserItem from './UserItem'
import Spinner from '../layout/Spinner'

const UserResult = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext)
  const { alert } = useContext(AlertContext)

  // useEffect(() => {
  //   return () => {
  //     fetchUsers()
  //   }
  // }, [])

  return alert ? (
    <div className='bg-`${alert.type}`'> {alert?.msg} </div>
  ) : !loading ? (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users && users.map(user => <UserItem user={user} key={user.id} />)}
    </div>
  ) : (
    <Spinner />
  )
}

export default UserResult
