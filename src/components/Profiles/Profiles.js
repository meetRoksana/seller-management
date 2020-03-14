import React from 'react';
import './Profiles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Profiles = (props) => {
    // console.log(props);

    const {img, name, seller, price, stock} = props.profile;


    return (
        <div className = "single-profile">
            <div className = "profile-image">
                <img src={img} alt=""/>
            </div>
            <div className = "profile-info">
                {/* <h4>Name: {name}</h4> */}
                <br></br>
                <h4>Name: {seller}</h4>
                <p>ID: {stock}</p>
                <br></br>
                <p>Income: ${price}</p>

                <button 
                    className = "addBtn"
                    onClick = {() => props.handleAddSeller(props.addSeller)}
                    ><FontAwesomeIcon icon={faUser}/> Add Seller</button>
            </div>
        </div>
    );
};

export default Profiles;