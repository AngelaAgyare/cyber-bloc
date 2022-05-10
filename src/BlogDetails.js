import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";



const BlogDetails = () =>{
    const {id} =useParams(); 
    const {data: blog, error, isPending} = useFetch(' http://localhost:8000/blogs/'+ id)
    const history = useHistory();

   const deleteBlog=() =>{
       fetch('http://localhost:8000/blogs/'+blog.id,{
           method: 'DELETE'
       }).then(() =>{  
           console.log('data deleted')
        history.push('/')
       })
   }

   return(
<div className="blog-details">
    <h2>Blog Details</h2>
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {blog && (
        <article>
            <h2>{blog.title} </h2>
            <h3>Written by {blog.author}</h3>
            <div>{blog.body}</div>
            <button onClick={deleteBlog}>Delete</button>
        </article>
    )}

</div>
    )
}

export default BlogDetails;