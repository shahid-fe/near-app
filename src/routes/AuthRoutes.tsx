import { memo } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../store"
import PublicRoutes from "./PublicRoutes"

const authenticatedExcludedPaths: string[] = ["register", "login", ""]
const isExlcludedPath = (path: string): boolean => {
  const updatedPath = path.replaceAll("/", "")
  return authenticatedExcludedPaths.includes(updatedPath)
}

const AuthRoutes = () => {
  const {
    isAuthenticated,
  } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

 
  if (isAuthenticated && isExlcludedPath(window.location.pathname)) {
    navigate('/app');
  }
  return <PublicRoutes />
}

export default memo(AuthRoutes)
