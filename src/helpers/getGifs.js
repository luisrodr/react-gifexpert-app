

export const getGifs=async(category)=>{
    const url=`http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=hdoXppmlco2Ed1T6UNYjVk0AcS14X0sM`;
    const resp =await fetch(url);
    const {data} =await resp.json();

    console.log("getGif datos......",url);
   
    const gifs =data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
            
        };
    });
    
    //console.log("DATOS...",gifs);
    return gifs;
};

