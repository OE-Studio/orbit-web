import axios from "../../api/axios"

export const MarkNotificationRead = async (userInput) => {

    const token = JSON.parse(sessionStorage.getItem('loginToken'))
    try {
        const response = await axios({
            method: 'PUT',
            url: `v1/users/notifications/mark_read?token=${token}`,
            data: userInput,
        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}



