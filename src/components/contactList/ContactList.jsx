import React, { useState } from 'react';
import Contact from '../contact/Contact';
import classes from './ContactList.module.css'; 

const ContactList = ({ contacts, onDeleteContact }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm)
    );

    if (!contacts || contacts.length === 0) {
        return (
            <div className={classes['contact-list']}>
                <div className={classes.noHay}>
                    <p className={classes.text}>
                        No hay contactos disponibles
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
        <input
            className={classes['filter-input']}
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleInputChange}
        />
            <div className={classes['contact-list']}>
                {filteredContacts.map(contact => (
                    <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
                ))}
            </div>
        
        </>
    );
};

export default ContactList;