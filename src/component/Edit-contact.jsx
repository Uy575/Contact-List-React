import React from 'react'

function Editcontact(props) {
  const {onClickHandler} = props;
  return (
   <button onClick={onClickHandler}>Edit contact</button>
  )
}

export default Editcontact;