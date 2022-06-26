import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css'
const Breakfast = ({breakfast}) => {
    const {img,name,title,price,id} = breakfast;

    const navigate = useNavigate()
    const handleFood =()=>{
        navigate(`/reviews/${id}`)
    }
    return (
        <div className='breakfast-info'>
            <img style={{width:'100%'}} src={img} alt="" />
            <div className='title-name'>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{price}</p>
            <button className='btn btn-primary'onClick={()=>handleFood(id)}>Food Details</button>
            </div>
        </div>
    );
};

export default Breakfast;