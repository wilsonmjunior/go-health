import React, {
  ReactNode,
  createContext,
  useContext,
  useState
} from 'react'

interface AuthContextData {
  data: string
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider ({ children }: AuthContextProviderProps) {
  const [data, setData] = useState('')

  return (
    <AuthContext.Provider
      value={{ data }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
