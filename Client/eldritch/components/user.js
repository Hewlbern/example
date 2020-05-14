import React, { createContext, useContext, useState } from 'react'

import { auth } from './services' // this is just firebase.auth()

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)

  auth.onAuthStateChanged(setUser)

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)