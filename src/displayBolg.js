import{Link} from 'react-router-dom'
const DisplayBlog = ({blogs, blogtitle,deleteBlog})=>{
    //const blogs = props.blogs;
    return(
        blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
            
            <h2>{blogtitle}</h2>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <h1>{blog.author}</h1>
            <p>{blog.body}</p>
            </Link>
             {/*<p>{blog.body}</p><br/>*/}
            {/*<button onClick={()=>deleteBlog(blog.id)}>Delete Blog</button>*/}
            </div>    
            ))

        
    )
}
export default DisplayBlog;