import axios from "../../api/axios";

export const updateIdentity = async (BVN, NIN, setLoading, setError, setStep, documentType) => {
    setLoading(true)
    let userToken = JSON.parse(
        sessionStorage.getItem("loginToken")
    );

    let userInput = {}

    if (documentType === 'NIN') {
        userInput.nin = NIN
    }

    if (documentType === 'BVN') {
        userInput.nin = BVN
    }

    await axios
        .put(`/v1/users/setIdentity?token=${userToken}`, userInput)
        .then((response) => {
            if (response.data.success === false) {
                setLoading(false)
                console.log(response.data)
                let errors = {}
                errors.bvn = response.data.message
                setError({ ...errors })

            }

            if (response.data.success === true) {
                setLoading(false)
                setStep(3)
                console.log(response.data)
            }
        })
        .catch((err) => {
            console.log(err);
            let errors = {}
            if (documentType === 'BVN') {
                errors.bvn = err.response.data.message
            }
            if (documentType === 'NIN') {
                errors.nin = err.response.data.message
            }
            setError({ ...errors })
            setLoading(false)
        });
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