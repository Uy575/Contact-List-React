
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Editable(props) {
  const {data} = props
  const { id } = useParams();
  const navigate = useNavigate();
  const goingToContactList = ()=>{
        navigate('/')
   }

   const [gettingDataForDetail, setgettingDataForDetsil] = useState([]);
   useEffect(() => {
     if (localStorage.getItem("contactlist"))
       setgettingDataForDetsil(JSON.parse(localStorage.getItem("contactlist")));
   }, []);


  const [formValues, setFormValues] = useState({fname:data.fname,lname:data.lname,number:data.number,email:data.email});
  const gettingInputValues =(e)=>{
  setFormValues({ ...formValues,[e.target.name]:e.target.value})
  }
  


  
  const gettingformdata = (e)=>{
    e.preventDefault();
     const delFilter = gettingDataForDetail.filter((f)=>{
      return f.email !==  id
     }) 
    if(formValues.fname && formValues.lname && formValues.number && formValues.email !== ''){
      // setLocals([...locals,formValues])
      localStorage.setItem('contactlist',JSON.stringify([...delFilter,formValues]));
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
export default Editable;