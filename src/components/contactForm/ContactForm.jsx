import React, { useState } from 'react';
import classes from './ContactForm.module.css';

const ContactForm = ({ onSaveContact }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            name,
            phone,
            email,
            description
        };
        onSaveContact(newContact);
        setName('');
        setPhone('');
        setEmail('');
        setDescription('');
    };

    return (
        <form className={classes['form-container']} onSubmit={handleSubmit}>
            <input
                className={classes['form-input']}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                required
            />
            <input
                className={classes['form-input']}
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Teléfono"
                required
            />
            <input
                className={classes['form-input']}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                required
            />
            <select className={classes['form-input']}>
                <option value="">Categoría...</option>
                <option value="amigos">Amigos</option>
                <option value="familia">Familia</option>
                <option value="trabajo">Trabajo</option>
            </select>
            <textarea
                className={classes['form-textarea']}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descripción"
            />
            <button className={classes['form-button']} type="submit">Guardar contacto</button>
        </form>
    );
};

export default ContactForm;