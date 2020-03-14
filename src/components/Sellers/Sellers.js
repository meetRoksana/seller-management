import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Sellers.css';
import Profiles from '../Profiles/Profiles';
import Income from '../Income/Income';

const Sellers = () => {
    const first10 = fakeData.slice(0,15);
    
    const [sellersProfile, setSellersProfile] = useState(first10); 

    const [sellerAdded, setSellerAdded] = useState([]);

    const handleAddSeller = (addSeller) => {
        const newSeller = [...sellerAdded, addSeller]
        setSellerAdded(newSeller);
    }

    return (
        <div className = "sellers-container" >
           
            <div className = "profile-container">
                {
                   sellersProfile.map(sProfile => <Profiles
                    handleAddSeller = {handleAddSeller}
                    profile = {sProfile}
                    ></Profiles>) 
                }
            </div>
            
            <div className = "income-container"> 
            <Income sellerAdded = {sellerAdded}></Income>
            </div>
            
        </div>
    );
};

export default Sellers;