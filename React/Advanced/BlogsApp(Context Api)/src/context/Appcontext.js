import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router";

//Step 1 :- Creating Context
export const AppContext = createContext() ;

export default function AppContextProvider({children}){
    const [loading , setLoading] = useState(false) ;
    const [posts , setPosts] = useState([])
    const [page , setPage] = useState(1) ;
    const [totalPages , setTotalPages] =useState(null)
    const navigate = useNavigate()

    //Filling data through API
    async function fetchBlogPosts(page =1 , tag=null , category=null){
        setLoading(true)

        let url = `${baseUrl}?page${page}`;

        if(tag){
            url += `&tag=${tag}` ;
        }

        if(category){
            url += `&category=${category}` ;
        }

        try {
            const result = await fetch(url)
            const data = await result.json()

            setPage(data.page)
            setTotalPages(data.totalPages)
            setPosts(data.posts)
        } catch (e) {
            console.log("Error Occurred" , e)
            setPage(1)
            setTotalPages(null)
            setPosts([])
        }

        setLoading(false)

    }

    function handleChangePage(page){
        // navigate({ search : `?page=${page}`})
        setPage(page)
        fetchBlogPosts(page)
    }



    // Snapshot of data
    const value = {
        loading , setLoading ,
        posts , setPosts ,
        page , setPage ,
        totalPages , setTotalPages ,
        fetchBlogPosts , handleChangePage 
    }



    //Step 2:- Providing Context 
    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>
}