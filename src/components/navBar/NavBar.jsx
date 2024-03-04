import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
        <Link to="/" className={classes.link}>
            <h2>Contactos</h2>
        </Link>
        <Link to="/add" className={classes.link}>Agregar Contacto</Link>
        </div>
    );
};

export default Navbar;