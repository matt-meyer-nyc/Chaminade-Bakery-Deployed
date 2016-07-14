import React from 'react';
import Header from './Header'
import Footer from './Footer'

require("../sass/styles.scss");

const HomePage = React.createClass({
  render: function() {
    return (
      <div>
       <Header />
        <div className='containerHP'>
          <img className="bakeryphoto" src={'http://s20.postimg.org/4znvwwo0t/Main_Photo_HP.jpg'} />
          <div className="crossfade">
           <img className="cf1" src={'http://d2gk7xgygi98cy.cloudfront.net/14-3-large.jpg'} />
           <img className="cf2" src={'http://danielchocolates.com/wp-content/uploads/2015/11/shop-pastries-banner.jpg'}/>
           <img className="cf3" src={'https://afrostore.files.wordpress.com/2011/01/bread.jpg'} />
          </div>
           <p className='hpDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img className='bake1' src='http://www.trbimg.com/img-5600668d/turbine/la-la-et-cm-bakers-wife-actors-la0031235562-20150913/650/650x366' />
          <img className='bake2' src='https://11111-presscdn-0-2-pagely.netdna-ssl.com/wp-content/uploads/2015/02/Carlos-Bakery-Red-Bank-Storefront1400.jpg' />
       </div>
      <Footer />
    </div>
    )
  }
});

export default HomePage
