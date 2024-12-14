// fileUploadUtil.js

const uploadFile = async (image, setRegister, setIsLoading) => {
    setIsLoading(true);
  
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
      setIsLoading(false);
      const img = data.secure_url;
  
      // Set the file URL in the state, not the input value
      setRegister((prevState) => ({ ...prevState, profilePic: img }));
    } catch (error) {
      console.error('Error during file upload:', error.message);
      setIsLoading(false);
    }
  };
  
  export default uploadFile;
  