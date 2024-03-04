import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import Navbar from './components/navBar/NavBar';

const App = () => {

  const [contacts, setContacts] = useState([]);

  //guardar un nuevo contacto
  const handleSaveContact = (newContact) => {
      setContacts(prevContacts => [...prevContacts, newContact]);
  };


  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/add" element={<ContactForm onSaveContact={handleSaveContact}  />} />
        <Route path="/" element={<ContactList contacts={contacts}/>} />
      </Routes>
    </Router>
  );
};

export default App;