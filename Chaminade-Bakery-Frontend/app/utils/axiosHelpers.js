import axios from 'axios'

const axiosHelpers = {
  listContacts: function() {
   return axios.get('https://chaminade-backend.herokuapp.com/contacts.json')
  },
  addContact: function(contact) {
    return axios.post('https://chaminade-backend.herokuapp.com/contacts.json', contact)
  },
  findContact: function() {
    return axios.get('https://chaminade-backend.herokuapp.com/:id.json')
  },
  deleteContact: function(id) {
    return axios.delete('https://chaminade-backend.herokuapp.com/contacts/:id', id)
  },
  updateContact: function(id) {
    return axios.put('https://chaminade-backend.herokuapp.com/contacts/:id', id)
  }
}

export default axiosHelpers;
