import { useState ,useEffect } from "react";
import axios from 'axios';

const useGif = (tag) => {
    
    const [gif , setGif] =useState('') ;
    
    const [loading , setLoading] =useState('false')
    
    // const API_KEY = 'kcgAwcHbjwVoksfYhftkwGM5RHzBM5lA';


    // const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=kcgAwcHbjwVoksfYhftkwGM5RHzBM5lA`;
    // const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=kcgAwcHbjwVoksfYhftkwGM5RHzBM5lA&tag=${tag}`;


    async function fetchData(){
            setLoading(true) ;
        

            // const {data} = await axios.get(tagUrl);
            // const imageSource = data.data.images.downsized_large.url;
            
            const a = await axios.get(tag ? tagUrl : randomUrl);
            const imageSource2 = a.data.data.images.downsized_large.url;
            
            setGif(imageSource2)
            setLoading(false)
        }
        // tagUrl : randomUrl
        
        useEffect( () => {
            fetchData(tag) ;
        },[])
        

        return {
            gif , loading , fetchData 
        }

}

export default useGif
