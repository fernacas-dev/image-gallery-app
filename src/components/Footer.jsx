import React from 'react'

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-primary text-center">
       <p className="text-white">Fernando Castellanos - &copy; {new Date().getFullYear()}{" "}</p> 
    </nav>
  )
}

export default Footer