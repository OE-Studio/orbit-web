import { Navigate } from 'react-router-dom'
import RootLayout from '../../Pages/RootLayout'

const ProtectedRoutes = () => {

    let isAuthenticated = JSON.parse(localStorage.getItem('isLogged'))

    return (
        isAuthenticated === true ? <RootLayout /> : <Navigate to='/login' />
    )
}

export default ProtectedRoutes