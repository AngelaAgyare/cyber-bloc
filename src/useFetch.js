import { useState, useEffect } from "react";

const useFetch =(url) =>{

    const[data,setData]= useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError ] = useState(null);
    
    useEffect(()=>{
        //console.log("Use effect running");
        //console.log(blogs)
        const abortcontl = new AbortController();
        setTimeout(() =>{
            fetch(url,{signal: abortcontl.signal}) 
        .then(res =>{
            if (!res.ok){  
                throw Error("Could not fetch data....")
            }
            return res.json();
        })
        .then(data =>{
            //console.log(data)
            setData(data);
            setIsPending(false)
            setError(null)
        })
        .catch(err => {
            if (err.name == 'AbortError'){
                console.log ('fetch Aborted')
            }
            else{
                setError(err.message)
                setIsPending(false)
                setData(null)
            }
           
            
        })
     }, 1000)
     return () => abortcontl.abort();
    },[url]);

    return{data, isPending, error}
        
}

export default useFetch;