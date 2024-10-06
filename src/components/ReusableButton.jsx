import React from 'react'

const ReusableButton = (props) => {
  //  Let's give the button some styling
  //  We can use the style attribute to add inline styles
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
  }

  
  const handleClick = () => {
    alert('You clicked the button')
    console.log('You clicked the button')
  }

  return (
    <div>
      <button style={buttonStyle} onClick={props.handleClick}>{props.title}</button>
    </div>
  )
}

export default ReusableButton