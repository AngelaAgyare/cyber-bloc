import{Link} from 'react-router-dom'
const Menu = () =>{
    
return (
    <nav className="menu">
     <h1>Mican Natural Blog</h1>
    <div className="links">
    <Link to="/">Home</Link>
    <Link to="/create " style= {{
        color:"white",
        backgroundColor:"#f1356d",
        borderRadius:"5px"
    }

    }>New Blog</Link>
    </div>
    </nav>
);
}

export default Menu;