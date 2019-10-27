import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css'


const Card = (props) =>{
    const {id, name, email} = props;
    return(
        <div className = "col-lg-3 mt-3">
        <div className="card-deck ">
            <div className = 'card'>
                <img src={`https://robohash.org/${id}?200x200`} alt='Robots'/>
                <div className='text-center'>
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Card;