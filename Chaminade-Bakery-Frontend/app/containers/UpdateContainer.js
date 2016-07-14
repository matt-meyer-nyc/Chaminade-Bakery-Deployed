
import React, {PropTypes} from 'react';
import ManageList from '../components/ManageList'
import axiosHelpers from '../utils/axiosHelpers'

const UpdateContainer = React.createClass({
  getInitialState: function () {
    return {
      axiosResponse: [],
      idU: '',
      newName:'',
      newEmail:'',
      id: '',
    }
  },

  handleId: function (e) {
    this.setState({
      idU: e.target.value
    })
  },

  handleNewName: function(e) {
    this.setState({
      newName: e.target.value
    })
  },

  handleNewEmail: function(e) {
    this.setState ({
      newEmail: e.target.value
    })
  },

  onSubmitUpdate: function () {
  event.preventDefault();
    console.log("clicked");
    console.log("update id#", this.state.id);
    const updateContact = {
      idU: this.state.id,
      newName: this.state.newName,
      newEmail: this.state.newEmail
    };
    axiosHelpers.updateContact(updateContact)
    .then(function(response) {
      console.log('response.data', response.data);
      this.setState({
        axiosResponse: response.data
      });
    }.bind(this));
  },

  userInput: function(e) {
    this.setState({
      id: e.target.value
    })
  },

  onSubmitDelete: function () {
    event.preventDefault();
    console.log('clicked');
    console.log("delete this id#", this.state.id);
    const deleteID = {
      id: this.state.id
    };
    axiosHelpers.deleteContact(deleteID)
    .then(function(response){
      console.log("response.data",response.data);
      this.setState({
        axiosResponse: response.data
      });
    }.bind(this));
  },


  render: function() {
    return (
      <ManageList
        onChangeId={this.handleId}
        onChangeNewName={this.handleNewName}
        onChangeNewEmail={this.handleNewEmail}
        onSubmitUpdate={this.onSubmitUpdate}
        onChangeDelete={this.userInput}
        onSubmitDelete={this.onSubmitDelete}
        />
    );
  }
});

export default UpdateContainer;
