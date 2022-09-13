import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="my-3">
            <Link to="/create">
                <button className="btn btn-danger m-3">Create Survey</button>
            </Link>
            
            <br/>

            <Link to="/publish">
                <button className="btn btn-danger m-3">Take Survey</button>
            </Link>
            
        </div>
    );
};

export default Menu;