//import React, { useEffect, useState } from 'react'
import './home.css'

function Home() {
    
   
    return <div id = 'body'>
      <h1 className = 'greet'>Welcome to Pmac</h1>
     
      <form className='form' action="/">
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
         <label for="lname">Last name:</label><br/>
         <input type="text" id="lname" name="lname"/><br/><br/>
         <a href = '#set'><input type="submit" value="Set User"/></a>
         <a href = '#get'><input type="submit" value="Get User"/></a>
        </form>

      </div>
     
    
}
export default Home