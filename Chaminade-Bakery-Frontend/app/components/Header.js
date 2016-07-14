import React from 'react'
import { Link } from 'react-router'
import Menu from './Menu'
import Story from './Story'
import SpecialtyCakes from './SpecialtyCakes'
import Contact from './Contact'
import Home from './Home'
require("../sass/styles.scss");


const Header = React.createClass({
  render: function () {
    return (
    <div className='header'>
      <img className="logo" src='http://www.brandcrowd.com/gallery/brands/pictures/picture13898935127245.png' />
      <div className='headerText'>
      <Link className="links" to='/home-page'>Home</Link>
      <Link className="links" to='/menu'>Menu</Link>
      <Link className="links" to='/story'>Story</Link>
      <Link className="links" to='/specialty-cakes'>Specialty Cakes</Link>
      <Link className="links" to='/contact'>Contact</Link>
      </div>
      </div>
   )
  }
});


export default Header
