import React from 'react'
//import { Header,Content,Footer } from './func-components'
import Calendar, { Content, Footer, Header } from './class-components'

export default function App(){
  return(
    <>
    
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
      
    </>
  )
}

//import './style.css'

//function App(){
 // return(
    //<>
   // <h2>DeveloperThai</h2>
    //<div className='title'>React & React Native</div>
   // </>
 // )
//}
//export default App;