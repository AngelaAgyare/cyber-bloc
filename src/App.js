import logo from './logo.svg';
import Menu from './Menu'
import Registration from './Registration'
import Home from './Home'
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails';

function App() {
  //const subtitle= "Home of quality and nutritious food products"
  return (
   <Router>
      <div className="App">
    <Menu/>
    <div className='content'>
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/blogs/:id"> 
          <BlogDetails/>
        </Route>
      </Switch>
     
    </div>
    </div>
   </Router>
  );
}

export default App;
