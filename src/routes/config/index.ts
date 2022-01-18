export type RouteType = {
  id: string
  component?: React.ElementType
  path?: string
  title: string
  exact?: boolean | undefined
  childs?: RouteType[]
}

export const PublicRoutesMap = {
  LOGIN: "/login",
  REGISTER: "/register",
  RESET_PASSWOR: "/set-password",
}

export const PrivateRoutesMap = [
 {
   id: '1',
   title: 'App',
   path: '/'
 }
]
