import axios from "../../api/axios";

export const updateIdentity = async (bvn) => {
    
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );

    try {
        const response = await axios
            .put(`/v1/users/setIdentity?token=${userToken}`, { bvn, })
        return response.data
    } catch (err) {
        
        return err
    }
}

export const verifyBVN = async (bvn, otp) => {
    
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );

    try {
        const response = await axios
            .put(`/v1/users/verifyBVN?token=${userToken}`, { bvn, otp })
        return response.data
    } catch (err) {
        
        return err
    }
}


export const uploadSelfie = async (imageDataUrl, setStep, setLoading) => {
    setLoading(true)
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );
    const formData = new FormData();



    const base64ToBlob = (base64Data, contentType) => {
        var sliceSize = 1024;
        let arr = base64Data.split(',')
        var byteCharacters = window.atob(arr[1]);
        var byteArrays = [];

        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);

            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            var byteArray = new Uint8Array(byteNumbers);

            byteArrays.push(byteArray);
        }

        var blob = new Blob(byteArrays, { type: contentType });
        
        return blob;
    }

    let blob = base64ToBlob(imageDataUrl, 'image/png');
    formData.append('selfieId', blob, 'image.png')


    await axios.put(`/v1/users/uploadKYCselfie?token=${userToken}`, formData).then((payload) => {
        setLoading(false)
        
        if (payload.data.success === true) {
            setStep(3)
        }

    }).catch(err => {
        setLoading(false)
        
    })

}
export const uploadGovtDocId = async (selectedFile, setStep, setLoading) => {
    setLoading(true)
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );
    const formData = new FormData();


    formData.append('govtDocId', selectedFile)

    await axios.put(`/v1/users/uploadKYCgovtId?token=${userToken}`, formData).then((payload) => {
        setLoading(false)
        
        if (payload.data.success === true) {
            setStep(4)
        }

    }).catch(err => {
        setLoading(false)
        
    })

}
export const uploadUtilityDoc = async (selectedFile, setStep, setLoading) => {
    setLoading(true)
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );
    const formData = new FormData();


    formData.append('utilityDocId', selectedFile)

    await axios.put(`/v1/users/uploadKYCutility?token=${userToken}`, formData).then((payload) => {
        setLoading(false)
        
        if (payload.data.success === true) {
            setStep(5)
        }

    }).catch(err => {
        setLoading(false)
        
    })

}