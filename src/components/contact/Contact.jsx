import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneAlt, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import classes from './Contact.module.css'; 

const Contact = ({ contact }) => {
    return (
        <div className={classes.contact}>
            <h2>
                <FontAwesomeIcon icon={faUser} className={classes.icon} /> {contact.name}
            </h2>
            <p className={classes.label}>
                <FontAwesomeIcon icon={faPhoneAlt} className={classes.icon} /> Teléfono:
            </p>
            <p>{contact.phone}</p>
            <p className={classes.label}>
                <FontAwesomeIcon icon={faEnvelope} className={classes.icon} /> Correo electrónico:
            </p>
            <p>{contact.email}</p>
            <p className={classes.label}>
                <FontAwesomeIcon icon={faComment} className={classes.icon} /> Descripción:
            </p>
            <p>{contact.description}</p>
        </div>
    );
};

export default Contact;