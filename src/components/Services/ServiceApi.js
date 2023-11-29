import axios from "../../api/axios"

export const fetchDataId = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'mspIds/dataProviderId',

        })

        return response.data
    } catch (error) {

    }
}
export const purchaseData = async (userInput, pin) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/purchaseData?token=${token}`,
            data: userInput,
            headers: {
                pin: pin
            }
        })


        return response.data
    } catch (error) {

    }
}


export const purchaseAirtime = async (userInput, pin) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/purchaseAirtime?token=${token}`,
            data: userInput,
            headers: {
                pin: pin
            }
        })

        return response.data
    } catch (error) {

    }
}


export const validateMeter = async (userInput) => {

    try {
        const response = await axios({
            method: 'GET',
            url: `v1/users/validate_metre?metre_number=${userInput.metre_number}&electricity_plan_api_id=${userInput.electricity_plan_api_id}`,
            data: userInput,
        })

        return response
    } catch (error) {

    }
}


export const purchaseElectricity = async (userInput, pin) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/purchaseElectricity?token=${token}`,
            data: userInput,
            headers: {
                pin: pin
            }
        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}




export const transfertoFriends = async (userInput, pin) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/transferToUser?token=${token}`,
            data: userInput,
            headers: {
                pin: pin
            }
        })

        return response.data
    } catch (error) {
        return error.response.data.data
    }
}


export const validateCable = async (userInput) => {

    try {
        const response = await axios({
            method: 'GET',
            url: `v1/users/validate_cable?smart_card_number=${userInput.smart_card_number}&cable_plan_api_id=${userInput.cable_plan_api_id}`,
            data: userInput,
        })

        return response
    } catch (error) {

    }
}


export const purchaseCable = async (userInput, pin) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))
    

    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/purchaseCable?token=${token}`,
            data: userInput,
            headers: {
                pin: pin
            }
        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}



export const getVirtualAccount = async () => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'GET',
            url: `v1/users/getUserVirtualWallet?token=${token}`,

        })

        return response.data
    } catch (error) {
        return error.response.data
    }
}


// Fetch Account Details

export const fetchAccountName = async (userInput) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `v1/nubanlookup`,
            data: userInput,
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}


export const BankTransfer = async (userInput, pin) => {
    const token = JSON.parse(sessionStorage.getItem('loginToken'))

    try {
        const response = await axios({
            method: 'POST',
            url: `v1/users/bankTransfer?token=${token}`,
            data: userInput,
            headers: {
                pin: pin
            }
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}