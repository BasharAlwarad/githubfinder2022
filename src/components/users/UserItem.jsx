import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const UserItem = ({ user: { login, avatar_url } }) => {

  
  
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <Link className='tex-base-content text-opacity-40' to={`/user/${login}`}>
        <div className='flex-row items-center space-x-4 card-body'>
          <div>
            <div className='avatar'>
              <div className='rounded-full shadow w-14 h-14'>
                <img src={avatar_url} alt='user_image' />
              </div>
            </div>
          </div>
          <div>
            <h2 className='card-title'>{login}</h2>
            Visit Profile
          </div>
        </div>
      </Link>
    </div>
  )
}

UserItem.prototypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem
