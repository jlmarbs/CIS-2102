import React, { Component } from 'react';

class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      name: '',
      age: '',
      contactNumber: '',
      id: '',
      course: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  addContact = () => {
    const { name, age, contactNumber, id, course, contacts } = this.state;

    if (contacts.some((contact) => contact.id === id)) {
      alert('ID# already exists in the Contact Book.');
      return;
    }

    const newContact = { name, age, contactNumber, id, course };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      age: '',
      contactNumber: '',
      id: '',
      course: '',
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  editContact = (id) => {
    const contact = this.state.contacts.find((contact) => contact.id === id);

    if (contact) {
      this.setState({
        name: contact.name,
        age: contact.age,
        contactNumber: contact.contactNumber,
        id: contact.id,
        course: contact.course,
      });

      this.deleteContact(id);
    }
  };

  render() {
    const { name, age, contactNumber, id, course, contacts } = this.state;
  
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <h1>Contact Book</h1>
  
            <form>
            <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="id">ID#:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={this.handleChange}
            required
          />
          <br />

          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={this.handleChange}
            required
          />
          <br />

          <button type="button" onClick={this.addContact}>
            Add Contact
          </button>
        </form>
      </div>
  
          <div style={{ flex: 1 }}>
            <h2>Contact List</h2>
            <ul>
            {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}, {contact.age} years old<br />
              Contact Number: {contact.contactNumber}<br />
              ID#: {contact.id}<br />
              Course: {contact.course}<br />
              <button onClick={() => this.deleteContact(contact.id)}>
                Delete
              </button>
              <button onClick={() => this.editContact(contact.id)}>Edit</button>
            </li>
          ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactBook