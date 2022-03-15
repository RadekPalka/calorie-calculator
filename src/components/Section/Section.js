import React from "react";
import { Routes, Route } from 'react-router-dom'
import Main from "../Main";
import ErrorPage from "../ErrorPage"

function Section(props){
  
  return(
    <section>
      
         <Routes> 
         
        <Route path='/' element={<Main/>}/>
          
          {props.links.map((el, index) => <Route  key={`${index}-${el.title}`}path={el.link} element={el.component}/>)}
          
          <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
  )
}
export default Section