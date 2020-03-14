import React from 'react';

const Income = (props) => {
    const sellerAdded = props.sellerAdded;
    return (
        <div>
            <h4>Sellers Income Summary:</h4>
            <p>Seller Added: {sellerAdded.length} </p>


        </div>
    );
};

export default Income;