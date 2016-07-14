import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
require("../sass/styles.scss");


const JoinTeam = React.createClass({
render: function() {
    return (
      <div>
       <Header />
        <div className="joinContainer">
         <p className="joinText">We're always looking for chefs that are passionate about baking. <br/>Contact us to learn more about opportunities!</p>
          <div className="addContact">
           <form>
             <div className="formJoin">
             <input className="nameJoin"placeholder="name" onChange={this.props.onChangeName}/><br></br>
             <input className="emailJoin" placeholder="email" onChange={this.props.onChangeEmail}/><br></br>
             <textarea className="joinTextInput" rows="20" cols="100" placeholder="Tell Us Why You Love Baking!" onChange={this.props.onChangeMessage} /><br></br>
             </div>
            <button className="sbmConJoin" onClick={this.props.onSubmitInput}>Submit</button><br></br><br></br><br></br>
          </form>
         </div>
        </div>
       <Footer />
     </div>
    )
  }
})

export default JoinTeam
