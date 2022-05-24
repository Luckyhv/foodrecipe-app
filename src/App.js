import './App.css';
import Categories from './components/Categories';
import Home from './pages/Home';
import Cuisine from './pages/Cuisine'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import Search from './components/Search';
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import {GiKnifeFork} from "react-icons/gi"
import {AnimatePresence} from "framer-motion"
function App() {
  return (
    <HashRouter>
      <div className="App">
        <div style={{
          padding:"1rem 0rem",
          display:'flex',
          justifyContent :"center",
          alignItems:"center"
        }}>
          <Link to={"/"} style={{
            textDecoration:"none",
            fontSize:"1.5rem",
            fontWeight:400,
            fontFamily:"Lobster Two cursive",
            color:"black",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <GiKnifeFork style={{color:"black",marginRight:"5px"}}/>
            Delicious
            </Link>
        <Search/>
        </div>
      <Categories/>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/cuisine/:type" element={<Cuisine/>}/>
          <Route path="/searched/:search" element={<Searched/> }/>
          <Route path="recipe/:name" element={<Recipe/>} />
        </Routes>
      </AnimatePresence>
      </div>
    </HashRouter>
  );
}

export default App;
