import React from 'react'

const Button = ({children, variant, onClick}) => {
  return (
    <button onClick={onClick} type="button" className={`btn btn-${variant}`}>{children}</button>
  )
}

Button.defaultProps = {
    variant: "dark"
}

export default Button