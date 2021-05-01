import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BlogPost from './component/BlogPost';
import Footer from './container/Footer';
import Header from './container/Header';
import Navbar from './container/Navbar';
import Mahasiswa from './component/Task/Mahasiswa'
import About from './component/About';


function App() {
  return (
    <BrowserRouter>
    <div >
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      <div>
        <Navbar/>
        <Header/>
          <Switch>
            <Route exact path="/" component={BlogPost} />
            <Route path="/mahasiswa" component={Mahasiswa} />      
            <Route path="/about" component={About} />      
          </Switch>
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
