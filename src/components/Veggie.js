import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"

function Veggie() {
  const [veggie, setveggie] = useState([]);

  const getveggie = async () => {
      const api = await fetch("https://api.spoonacular.com/recipes/random/?apiKey=6466b528c8414f3e8b24d98e362993ab&number=20&tags=vegetarian")
      const data = await api.json();
      console.log(data);
      setveggie(data.recipes);
  };
  useEffect(() => {
      getveggie();
  }, []);
  return (
      <div className='popularcon'>
          <h3 className='poptitle'>Veggies</h3>
          <div className="flexcon">
              {veggie.map((recipe) => {
                  return (
                      <div key={recipe.id} className="card">
                          <Link to={"/recipe/" + recipe.id} className='linkco'>
                          <div className="conn">
                              <img src={recipe.image} alt="" className='img1' />
                          </div>
                          <p className='title'>{recipe.title}</p>
                          </Link>
                      </div>
                  );
              })}
          </div>
      </div>
  )
}

export default Veggie
