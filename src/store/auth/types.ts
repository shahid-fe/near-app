export interface User {
  userId: string;
  name: string
}

export type AuthState = {
  user: User
  token: string | null
  isAuthenticated: boolean
  stepNo: number;
}
