import axios from "../../../api/axios"



export const getCode = async (email, setError, navigate, setLoading) => {
    setError('')
    setLoading(true)
    sessionStorage.setItem('email', email)
    await axios.put('/v1/users/passwordReset/request', {
        email
    }).then(response => {

        if (response.data.success === false) {
            setError(response.data.message)
            setLoading(false)
        }

        if (response.data.success === true) {
            setLoading(false)
            navigate('/forgot-password/otp')
        }
    }).catch(err => {

    })
}




export const confirmPin = async (email, otp, setError, navigate, setLoading) => {
    setLoading(true)

    await axios.put('/v1/users/passwordReset/verify', {
        email, otp
    }).then(response => {

        if (response.data.success === false) {
            setError(response.data.message)

            setLoading(false)
        }

        if (response.data.success === true) {
            setLoading(false)
            sessionStorage.setItem('userId', JSON.stringify(response.data.user))
            navigate('/forgot-password/update')
        }
    }).catch(err => {

    })
}


export const updatePassword = async (newPassword, setLoading, setError, navigate) => {
    await axios.put('/v1/users/passwordReset/reset', {
        newPassword, userId: JSON.parse(sessionStorage.getItem('userId'))
    }).then(response => {

        if (response.data.success === false) {
            setError(response.data.message)

            setLoading(false)
        }

        if (response.data.success === true) {
            setLoading(false)
            sessionStorage.setItem('userId', JSON.stringify(response.data.user))
            navigate('/forgot-password/update-success')
        }
    }).catch(err => {

    })
}