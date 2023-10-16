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



const sendSMSotp = async (body, userPhoneNumber) => {
    try {
        // Your BulkSMSNigeria API endpoint
        const url = 'https://www.bulksmsnigeria.com/api/v2/sms';

        // Construct the request body
        const data = {
            from: "orbit",
            to: userPhoneNumber,
            body: body,
            api_token: ""
        };

        const result = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Add any necessary authentication headers, such as an API key, here
            },
        });
        console.log(result.data)
        return result.data

    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: error.message
        }
    }
}