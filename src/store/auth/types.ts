export interface User {
  email: string
  isPasswordAdded: boolean
  isTeamInfoAdded: boolean
  role: string
  name?: string
  img?: string | null
}

export type AuthState = {
  user: User
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}
