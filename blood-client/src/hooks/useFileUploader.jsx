import { useState } from 'react';

export default function useFileUploader() {
    const [fileLoading, setFileLoading] = useState(false);

    const uploadFile = async (image, setRegister) => {
        setFileLoading(true);

        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "demo-image");
        formData.append("cloud_name", "dsrkrb3jy");

        try {
            const res = await fetch(
                "https://api.cloudinary.com/v1_1/dsrkrb3jy/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!res.ok) {
                throw new Error(`File upload failed: ${res.status} - ${res.statusText}`);
            }

            const data = await res.json();
            const imgUrl = data.secure_url;

            // Update the parent state with the image URL
            setRegister((prevState) => ({ ...prevState, photo: imgUrl }));
        } catch (error) {
            console.error('Error during file upload:', error.message);
        } finally {
            setFileLoading(false);
        }
    };

    return {
        fileLoading,
        uploadFile,
    };
}
