import { useState } from "react";
const Create = ()=>{
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isPending, setisPending] = useState(false)

    const postBlog=(e) =>{
        e.preventDefault()
        const blog = {title,body,author}
        setisPending('true')
    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"content-type":"application/json"},
        body: JSON.stringify(blog)
    }) .then(()=>{
            console.log('New Data Added')
            setisPending('false')
    })
    }
    return(
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={postBlog}> 
                <label>Blog Title</label>
                <input type="test" required value= {title} onChange={(e)=> setTitle (e.target.value)}/>
               <div><label>Blog Body</label></div> 
                <textarea required value={body} onChange={(e)=> setBody (e.target.value)}></textarea> 
                <div><label>Author</label></div>
                <select value={author} onChange={(e)=> setAuthor (e.target.value)}>
                    <option value = "None"></option>
                    <option value = "Eugene">Eugene</option>
                    <option value = "Angela">Angela</option>
                    <option value = "Theo" >Theo</option>
                </select>
               {!isPending && <button>Add Blog</button>}
               {isPending && <button>Adding...</button>}
              
                
            </form>
        </div>
    );
}

export default Create; 