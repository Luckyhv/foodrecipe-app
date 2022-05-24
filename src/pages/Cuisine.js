import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { Link, useParams } from 'react-router-dom'
import './Cuisine.css'

function Cuisine() {
  const [cuisine, setcuisine] = useState([]);
  let params = useParams();

  const getcuisine = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=6466b528c8414f3e8b24d98e362993ab&cuisine=${name}&number=12`)
    const data = await api.json();
    console.log(data);
    setcuisine(data.results);
  }

  useEffect(() => {
    getcuisine(params.type);
    // console.log(params.type);
  }, [params.type])

  return (
    <motion.div className="grid"
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
      {cuisine.map((recipe) => {
        return (
          <div key={recipe.id} className="cuscard">
            <Link to={"/recipe/"+ recipe.id} className="linkconn">
            <div className="cusconn">
              <img src={recipe.image} alt="" className='cusimg' />
            </div>
            <p className='custitle'>{recipe.title}</p>
            </Link>
          </div>
        );
      })}
    </motion.div>
  )
}

export default Cuisine
