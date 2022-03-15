import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import  Header  from './components/Header'
import Bmi from "./components/Bmi"
import Ppm from "./components/Ppm"
import Cpm from "./components/Cpm"
import Section from "./components/Section"
const links =[
  {
    link: "/bmi",
    title: "BMI",
    component: <Bmi/>
  },
  {
    link: "/ppm",
    title: "PPM",
    component: <Ppm/>
  },
  {
    link: "/cpm",
    title: "CPM",
    component: <Cpm/>
  }
]



function App () {
  
  return (
    
    <BrowserRouter>
      <div className="App">
        <Header links={links}/>
        <Section links={links} />
      </div>
    </BrowserRouter>
  );
}

export default App;
