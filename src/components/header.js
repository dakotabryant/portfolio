import React from 'react'
import Link from 'gatsby-link'
import logo from '../assets/logos/Logo.svg'

const Header = ({siteTitle}) => (
  <div className="header" >
    <img src={logo} alt="dakota bryant logo" className="logo"/>
  </div>
)

export default Header
