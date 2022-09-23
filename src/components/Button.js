import React from 'react'

const Button = ({children, variant}) => {
  return (
    <button type="button" className={`btn btn-${variant}`}>{children}</button>
  )
}

Button.defaultProps = {
    variant: "dark"
}

export default Button