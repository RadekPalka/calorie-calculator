import React from 'react'
import { Link } from 'react-router-dom'





function Header(props){
  return(
    <>
      <header>
          <h1>Kalkulator kalorii</h1>
          <nav>
            <ul>
              {props.links.map((el, index)=><li key={`${index}-${el.title}`}>
                <Link to={el.link} >{el.title} </Link>
                </li>)
              }
            </ul>
          </nav>
        </header>
        

       
      </>
  )
}

export default Header