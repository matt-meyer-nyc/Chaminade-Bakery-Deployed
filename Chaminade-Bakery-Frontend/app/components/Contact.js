import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'

require("../sass/styles.scss");


const Contact = React.createClass({
render: function() {
    return (
      <div>
       <Header />
       <div className='contactContainer'>
         <img className='contImg' src='http://images4.fanpop.com/image/photos/23400000/Breakfast-delicious-recipes-23444646-1600-1000.jpg' />
         <form className='wholeForm'>
        <div className="form">
         <img className="logoC" src='http://www.brandcrowd.com/gallery/brands/pictures/picture13898935127245.png' />
         <p className="message">We'd Love to Stay in Touch...<br/>Please Sign Up!</p>
         <input className="name"placeholder="name" onChange={this.props.onChangeName}/><br></br>
         <input className="email" placeholder="email" onChange={this.props.onChangeEmail}/><br></br>
         <textarea className='textarea' rows="15" cols="30" placeholder="leave a note" onChange={this.props.onChangeMessage} /><br></br>
         </div>
          <button className="sbmCon"  onClick={this.props.onSubmitInput}>Submit</button><br></br><br></br><br></br>
          </form>
        </div>
      <Footer />
    </div>
    )
  }
})

export default Contact
