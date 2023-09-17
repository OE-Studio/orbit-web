import axios from "../../api/axios";

export const updateIdentity = async (bvn) => {
    console.log(bvn)
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );

    try {
        const response = await axios
            .put(`/v1/users/setIdentity?token=${userToken}`, { bvn, })
        return response.data
    } catch (err) {
        console.log(err);
        return err
    }
}

export const verifyBVN = async (bvn, otp) => {
    console.log(bvn)
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );

    try {
        const response = await axios
            .put(`/v1/users/verifyBVN?token=${userToken}`, { bvn, otp })
        return response.data
    } catch (err) {
        console.log(err);
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
        console.log(blob)
        return blob;
    }

    let blob = base64ToBlob(imageDataUrl, 'image/png');
    formData.append('selfieId', blob, 'image.png')


    await axios.put(`/v1users/uploadKYC?token=${userToken}`, formData).then((payload) => {
        setLoading(false)
        console.log(payload)
        if (payload.data.success === true) {
            setStep(5)
        }

    }).catch(err => {
        setLoading(false)
        console.log(err)
    })

}