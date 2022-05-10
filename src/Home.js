import {useState,useEffect}from "react";
import DisplayBlog from "./displayBolg";
import useFetch from "./useFetch";

const Home = ()=> {
    const{data: blogs, isPending, error} = useFetch(' http://localhost:8000/blogs')


    /*let text = "This is where Tech Lives"
    const [text, setText] = useState('This is where Tech Lives')
    const [text1, setText1] = useState('The best tech news')

    const clickHandler = ()=>{
        setText("Get the latest tech updates from us")
        setText1("The best tech news")
        //console.log (text);
    }*/
   
    


//console.log('This page is running')

//const deleteBlog=(id)=>{
   // const newBlogs= blogs.filter(blog=>blog.id!==id);
    //blogs(newBlogs);



return (
    <div className="home">
        {isPending && <div>Loading....</div>}
        {error && <div>{error}</div>}
   {blogs && <DisplayBlog blogs= {blogs} blogtitle="All Blogs"/>} {/*deleteBlog={deleteBlog}/>*/}
   {/*<DisplayBlog blogs= {blogs.filter((blog)=>blog.author=="Theophilus")} blogtitle="Theo's Blogs" deleteBlog={deleteBlog}/>*/}
  

    </div>
);

}
export default Home;