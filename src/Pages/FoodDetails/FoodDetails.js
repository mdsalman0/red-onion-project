import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const {foodId} = useParams()
    return (
        <div>
            <h1>{}</h1>
        </div>
    );
};

export default FoodDetails;