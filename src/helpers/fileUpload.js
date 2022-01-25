
export const fileUpload = async (file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/hildebrandosv/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'pruebashs');
    formData.append('file', file);


    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
    const cloudResp = await resp.json();
    console.log('URL es: ' + cloudResp.secure_url)
    return cloudResp.secure_url;

}

