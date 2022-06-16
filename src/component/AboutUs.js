import React from 'react'
import { useNavigate ,Link,Route,Routes } from 'react-router-dom'
import AboutMe from './AboutMe';
export default function AboutUs() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/') ; 
  };
  return (
    <div>
      <h1>AboutUs</h1>
      <button onClick={clickHandler}>undo</button>
      <br />
      <Link to='me' > AboutMe</Link>
      <br />
      <Link to='team' >AboutTeam</Link>
      <Routes>
         <Route path='me' element={<AboutMe/>} />
         <Route path='team' element={<h1>team include professional</h1>} />
      </Routes>
    </div>
  )
}
