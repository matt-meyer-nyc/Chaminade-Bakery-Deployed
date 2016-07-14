import React from 'react'
import { Link } from 'react-router'


const Admin = React.createClass({

  render: function () {
    console.log(this.props.contacts);
    const list = this.props.contacts
         const contactList = list.map((contactName) => {
           return <li key={contactName.id}>{contactName.id} - {contactName.name}: {contactName.email}</li> })
    return (
      <div>
        <Link to='/home-page'>Home</Link>
         <div>
           <h1>Welcome Admin!</h1>
           <h2>Mailing List Members</h2>
           <h3>Click Below to Update/Delete from List</h3>
         <ul>
           {contactList}
         </ul>
       </div>


       <Link className='editList' to='/manage'>
         <button type='button'>Edit List</button>
       </Link>
      </div>
    )
  }
})


export default Admin
