import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Fieldsforaddcontact() {
      
    const navigate = useNavigate();
    const goingToContactList = ()=>{
          navigate('/')
        }

    let [locals,setLocals] = useState([])
    const [formValues, setFormValues] = useState({fname:'',lname:'',number:'',email:''});
    const gettingInputValues =(e)=>{
    setFormValues({ ...formValues,[e.target.name]:e.target.value})
    }
    
    useEffect(()=>{
         if(localStorage.getItem('contactlist')){
         setLocals(JSON.parse(localStorage.getItem('contactlist')))
        }
        
    },[])
    
    const gettingformdata = (e)=>{
      e.preventDefault();

      if(formValues.fname && formValues.lname && formValues.number && formValues.email !== ''){
        setLocals([...locals,formValues])
        localStorage.setItem('contactlist',JSON.stringify([...locals,formValues]));
      }
      else{
        alert('please fill out all fields')
      }
      setFormValues({fname:'',lname:'',number:'',email:''});
 
    }
    return (
      <>
          <h1>Add Contact</h1>
   <form >
     <input type="text" name='fname' value={formValues.fname} placeholder='Enter first name' onChange={gettingInputValues}/>
     <input type="text" name='lname' value={formValues.lname} placeholder='Enter last name' onChange={gettingInputValues} />
     <input type= 'phone' name='number' value={formValues.number} placeholder = 'Enter number' onChange={gettingInputValues}/>
     <input type = 'email' name='email' value={formValues.email} placeholder = 'Enter Email'onChange={gettingInputValues} />
     <button type='submit' onClick={gettingformdata}>save</button>
     <button type='button' onClick={goingToContactList}> back to contacts</button>
   </form>
   </>
  )

}
export default Fieldsforaddcontact;