import { createContext, useState, useReducer } from 'react'

import githubReducer from './GithubReducer'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([])
  // const [loading, setLoading] = useState(true)

  const initialState = {
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)
  const { users, loading } = state

  // @desc      git initial default users
  // @func      GET
  const searchUsers = async text => {
    try {
      setLoading()
      const params = new URLSearchParams({
        q: text,
      })
      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
      const { items } = await response.json()
      // setUsers(data)
      // setLoading(false)

      dispatch({
        type: 'GET_USERS',
        payload: items,
      })
    } catch (error) {
      console.error(error.message)
    }
  }

  const clearUsers = () => {
    dispatch({
      type: 'CLEAR_USERS',
    })
  }

  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        clearUsers,
        searchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
