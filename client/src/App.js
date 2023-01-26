
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './screens/home'
import "./App.css"
//import {BrowserRouter, Route} from 'react-router-dom'
///import setUser from './screens/setUser'
//import getUser from './screens/getUser'


function App() {

  return <div className="body">
    <Header />
    <Home/>
    <Footer />
  </div>
 
}

export default App
