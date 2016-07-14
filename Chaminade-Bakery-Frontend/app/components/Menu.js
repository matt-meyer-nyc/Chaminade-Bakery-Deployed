import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'
require("../sass/styles.scss");
import Drinks from './Drinks'
import Home from './Home'

const Menu = React.createClass({
  render: function () {
  return (

     <div>
       <Header />
        <div className="menuContainer">
         <div className='menuLinks'>
           <Link className="linksM" to='/menu'>Pastries</Link>
           <Link className="linksM" to='/cakes'>Cakes</Link>
           <Link className="linksM" to='/drinks'>Drinks</Link>
          </div>
          <div className="crossfadeA">
           <img className="a1" src={'http://d2gk7xgygi98cy.cloudfront.net/14-3-large.jpg'} />
          </div>
          <div className="crossfadeB">
           <img className="b2" src={'http://danielchocolates.com/wp-content/uploads/2015/11/shop-pastries-banner.jpg'}/>
          </div>
          <div className="crossfadeC">
           <img className="c3" src={'https://afrostore.files.wordpress.com/2011/01/bread.jpg'} />
          </div>
         <div className="menuItem1">
          <p className="pastries"> CROISSANT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.75</p>
          <p className="pastries"> CHOCOLATE CROISSANT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.25</p>
          <p className="pastries"> ALMOND CROISSANT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.</p>
          <p className="pastries"> SCONE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.00</p>
          <p className="pastries"> PAIN AU RAISIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.25</p>
          <p className="pastries"> CARROT MUFFIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.75</p>
          <p className="pastries"> BLUEBERRY MUFFIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.75</p>
          <p className="pastries"> CHEESE DANISH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.25</p>
          <p className="pastries"> APPLE TURNOVER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.50</p>
          <p className="pastries"> CHOCOLATE BISCOTTI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1.50</p>
          <p className="pastries"> ALMOND BISCOTTI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1.50</p>
          <p className="pastries"> LINZER COOKIE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.00</p>
          <p className="pastries"> PALMIER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.50</p>
          <p className="pastries"> GRAND MACARON (SEASONAL FLAVORS)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.00</p>
          <p className="pastries"> APPLE GALETTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.00</p>
          <p className="pastries"> CHOCOLATE FLOURLESS CAKE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.00</p>
          <p className="pastries"> APPLE DUTCH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.50</p>
          <p className="pastries"> APPLE ALMOND FRUIT CAKE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.50</p>
          <p className="pastries"> GRAND FINANCIER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1.75</p>
          <p className="pastries"> ALMONDINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.00</p>
          <p className="pastries"> FLORENTINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $3.00</p>
          <p className="pastries"> COCONUT ROCHER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.00</p>
          <p className="pastries"> GRAND MADELEINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $1.25</p>
          <p className="pastries"> AMERICAN CHOCOLATE CHIP COOKIE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $2.25</p>
          <p className="pastries"> PETITS GÂTEAUX &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00 </p>
          <p className="pastries"> NAPOLEON&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00</p>
          <p className="pastries"> FRAISIER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.50</p>
          <p className="pastries"> CHOCOLATE MOUSSE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.50</p>
          <p className="pastries"> CHEESECAKE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00</p>
          <p className="pastries"> BERRY TARTELETTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00</p>
          <p className="pastries"> APPLE DUTCH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.50</p>
          <p className="pastries"> TIRAMISU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $6.00</p>
          <p className="pastries"> OPERA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00</p>
          <p className="pastries"> CHOCOLATE ÉCLAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.00</p>
          <p className="pastries"> VANILLA ÉCLAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.00</p>
          <p className="pastries"> SACHER TORTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $6.00</p>
          <p className="pastries"> FLAN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.00</p>
          <p className="pastries"> FRUIT DIPLOMAT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.50</p>
          <p className="pastries"> PASSION FRUIT BERRY&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $5.50</p>
          <p className="pastries"> CHOCOLATE HAZELNUT ÉCLAIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.25</p>
          <p className="pastries"> BANANA GIANDUJA CHOCOLATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $5.50</p>
          <p className="pastries"> CASSIS WHITE CHOCOLATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.50</p>
          <p className="pastries"> BROWNIE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $4.25</p>
          <p className="pastries"> KEY LIME BERRY TARTELETTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00</p>
          <p className="pastries"> WHITE RASPBERRY TARTELETTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00</p>
          <p className="pastries"> RASPBERRY WHITE CHOCOLATE MOUSSE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.50</p>
         </div>
        </div>
      <Footer />
    </div>
    )
   }
  })



export default Menu
