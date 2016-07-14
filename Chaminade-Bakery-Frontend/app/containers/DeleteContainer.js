
import React, {PropTypes} from 'react';
import ManageList from '../components/ManageList';
import axiosHelpers from '../utils/axiosHelpers';

const DeleteContainer = React.createClass({
  getInitialState: function() {
    return {
      id: ''
    }
  },

  userInput: function(e) {
    this.setState({
      name: e.target.value
    })
  },

  onSubmitDelete: function (event) {
    event.preventDefault;
    console.log('clicked');
    console.log("delete author", this.state.id);
    const contactID = {
      name: this.state.id
    };
    axiosHelpers.deleteContact(contactID)
    .then(function(response){
      console.log("response.data",response.data);
      this.setState({
        id: response.data
      });
    }.bind(this));
  },


  render: function() {
    return (
      <ManageList
        onChangeDelete={this.userInput}
        onSubmitDelete={this.onSubmitDelete}
      />
    )
  }
});


export default DeleteContainer
