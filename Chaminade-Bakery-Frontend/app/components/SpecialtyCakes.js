import React from 'react'
import Header from './Header'
import Footer from './Footer'



const SpecialtyCakes = React.createClass({
  render: function () {
  return (
    <div>
      <Header />
        <div className='scContainer'>
          <img className='sc1' src='http://static1.squarespace.com/static/56800781e0327cd48ad7a82c/t/569a8d9d1f4039527f8da387/1452969375832/Wedding+cakes+and+weddign+favours+cake+table+by+Blossom+Tree+Cake+Co+Harrogate+North+Yorkshire+panoramic.jpg?format=2500w' /><br></br>
          <img className='sc2'  src='http://www-static.weddingbee.com/pics/30729/305734_10150297595873758_19640398757_7808776_2230097_n.jpg' />
          <img className='sc3'  src='https://s-media-cache-ak0.pinimg.com/736x/99/f8/69/99f869055c6aa29ba8ca96343c7f7679.jpg' />
          <img className='sc4'  src='http://www.amazingcakeideas.com/wp-content/uploads/2015/11/Beautiful-Wedding-Cake.jpg' />
        </div>
       <Footer />
     </div>
  )
 }
})


export default SpecialtyCakes
