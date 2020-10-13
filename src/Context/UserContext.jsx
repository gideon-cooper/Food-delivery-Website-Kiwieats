import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const defaultUser = {
    id: '',
    email: '',
    name: '',
  }
  const [user, setUser] = useState(defaultUser)
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
}
