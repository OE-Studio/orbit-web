import axios from "../../api/axios"

export const ChangePassword = async (userInput) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))
    console.log(token)
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