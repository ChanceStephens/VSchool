import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/ContextProvider';


function Navbar() {

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <h1>Todo App</h1>

                <button>Home</button>

                <button>Add todo</button>

                <button>See todos</button>

            </div>
            <button>Toggle theme</button>
        </div>
    );
}

export default Navbar;