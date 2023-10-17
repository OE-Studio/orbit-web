import axios from "../../api/axios"

export const ChangePassword = async (userInput) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'PUT',
            url: `v1/users/changePassword?token=${token}`,
            data: userInput,
        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const ChangePin = async (userInput) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'PUT',
            url: `v1/users/changePin?token=${token}`,
            data: userInput,
        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const GetAllBackgrounds = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: `v1/bg_images/get`,
        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}

export const SetPreferredBg = async (userInput) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/bg/set?token=${token}`,
            data: userInput,
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}


export const GetAllReferrals = async () => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))
    try {
        const response = await axios({
            method: 'GET',
            url: `v1/users/referral/getUserReferrals?token=${token}`,
        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}


export const logOut = async () => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))
    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/logout?token=${token}`,
        })
        return response.data
    } catch (error) {
        return error.response.data
    }

}


export const deleteUser = async () => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))
    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/logout?token=${token}`,
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}