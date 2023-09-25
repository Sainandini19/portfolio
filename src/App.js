
import  {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './component/Home'

import Projects from './component/Projects'

import Contacts from './component/Contacts'

import Skills from './component/Skills'

// import NotFound from './component/NotFound'

import './App.css'
import Header from './component/Header'

const App = () => (
<BrowserRouter> 
   <Header />
   <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/skills' Component={Skills}/>
    <Route exact path='/projects' Component={Projects}/> 
    <Route exact path='/contacts' Component={Contacts}/>
   </Routes>
  </BrowserRouter>
  
)

export default App;