import React from 'react'
import { Link } from 'react-router'

const ManageList = React.createClass({

  render: function () {
    return (
      <div className="manage">
       <div className="manageLinks">
        <Link to='/admin'>Admin</Link><br></br>
        <Link to='/home-page'>Home</Link>
       </div>
      <div>
      <form>
       <div className="form2">
       <strong>Enter ID# to delete from email list:</strong><br/><input className="manageDelName"placeholder="enter id#" onChange={this.props.onChangeDelete}/><br></br>
       </div>
       <button className="sbmDel" onClick={this.props.onSubmitDelete}>Delete</button><br></br><br></br><br></br>
      </form>

       <form>
        <div className="form3">
        <strong>Enter id# and enter name or email to update:</strong><br/><input className="manageName" placeholder="enter id#" onChange={this.props.onChangeId}/><br></br>
        <input className="namageNewName" placeholder="update name" onChange={this.props.onChangeNewName}/><br></br>
        <input className="manageNewEmail" placeholder="update email" onChange={this.props.onChangeNewEmail}/><br></br>
        </div>
        <button className="sbmUpd" onClick={this.props.onSubmitUpdate}>Update</button>
       </form>
      </div>
     </div>
    )
  }
})


export default ManageList
