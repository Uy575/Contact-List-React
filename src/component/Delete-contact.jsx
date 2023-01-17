import React from 'react'

function Deletecontact(props) {
  const {onClickHandler} = props
  return (
   <button onClick={onClickHandler} >Delete contact</button>
  )
}

export default Deletecontact;