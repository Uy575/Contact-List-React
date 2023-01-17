
import { useEffect, useState } from 'react';
import {  NavLink } from 'react-router-dom';
import Addcontact from './Add-contact';
import Searchbar from './Search-bar';
import Norecord from './No-record';
function Contactcard() {
  

  const [searchValue,setsearchValue] = useState('')
 const onsearchchange = (event)=> {
    const targetValue = event.target.value.toLocaleLowerCase().trim(); 
    setsearchValue(targetValue);
  }
  

  const [gettingdata,setgettingdata] = useState([]);
  useEffect(()=>{
    if(localStorage.getItem('contactlist')) setgettingdata (JSON.parse(localStorage.getItem('contactlist'))) 
   
  },[])

    const [filterMonster,setfiltermonster] = useState([])

    useEffect(()=>{
     
    const filteringMonster =  gettingdata.filter((F)=>{
      return (F.fname.toLocaleLowerCase().includes(searchValue) || F.lname.toLocaleLowerCase().includes(searchValue) || F.number.includes(searchValue));
      
    });
    
    setfiltermonster(filteringMonster);
  },[searchValue,gettingdata]) 


    filterMonster.sort((a,b)=>{
        
      if(a.fname > b.fname){
        return 1
      }
      else{
        return -1;
      }

    })


if(gettingdata.length===0){
   
    <Norecord/>
  }
  else{
    return (
      <>
    <h1>Contact List</h1>
    <Searchbar placeholder = 'search here' onChangeHandler = {onsearchchange}/>
    {filterMonster.map((m)=>{
        return( 
          <NavLink className= 'noDecoration' to={`/contactdetail/${m.email}`} key={m.email} > <div className='contactCard'><span className='icon'>{m.fname[0].toLocaleUpperCase()}</span> <span>{m.fname + ' ' + m.lname}</span>
     </div>
     </NavLink>
    ) 

    
  })} 
    <Addcontact/>
    
    </>
  )
}
}

export default Contactcard;