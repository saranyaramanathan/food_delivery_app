export const uploadToCloudinary = async (pics) => {
    
    if (pics) {

       
      
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "zara-social");
      data.append("cloud_name", "dp8cq1vh1");
  
      const res = await 
      fetch(`https://api.cloudinary.com/v1_1/dp8cq1vh1/image/upload`, {
        method: "post",
        body: data,
      })
        
        const fileData=await res.json();
        console.log("url : ", fileData);
        return fileData.url
  
    } else {
      console.log("error");
    }
  };