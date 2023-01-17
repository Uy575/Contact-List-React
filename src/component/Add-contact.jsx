
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Addcontact() {
   const navigate = useNavigate();
    
   useEffect(()=>{
     if(localStorage.getItem('contactlist')) (JSON.parse(localStorage.getItem('contactlist')))
  
   },[])

   const goingtoaddcontact = () =>{
        navigate('addcontact')

   } 
  return (
    <>
    <button onClick={goingtoaddcontact}>+ Add to contact</button>

    
    </>
  )
}

export default Addcontact;