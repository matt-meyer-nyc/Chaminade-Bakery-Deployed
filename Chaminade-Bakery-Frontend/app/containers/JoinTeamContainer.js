import React, { PropTypes } from 'react';
import JoinTeam from '../components/JoinTeam';
import axiosHelpers from '../utils/axiosHelpers'

const JoinTeamContainer = React.createClass({

getInitialState: function() {
  return {
    name: "",
    email: "",
    message: ""
  }
},

handleOnChangeName: function(e) {
  this.setState({
    name: e.target.value
  })
},

handleOnChangeEmail: function(e) {
  this.setState({
    email: e.target.value
  })
},

handleOnChangeMessage: function(e) {
  this.setState({
    message: e.target.value
  })
},

handleSubmitInput: function(e) {
  e.preventDefault();
  this.setState({
    name: this.state.name,
    email: this.state.email,
    message: this.state.message
  });

 const input = {
   name: this.state.name,
   email: this.state.email,
   message: this.state.message
 };

  axiosHelpers.addContact(input)
   .then(function(response) {
     console.log(response);
   })

 },

 render: function () {
   return (
     <JoinTeam
       onChangeName={this.handleOnChangeName}
       onChangeEmail={this.handleOnChangeEmail}
       onChangeMessage={this.handleOnChangeMessage}
       onSubmitInput={this.handleSubmitInput}
       / >
   )
 }
})

export default JoinTeamContainer;
