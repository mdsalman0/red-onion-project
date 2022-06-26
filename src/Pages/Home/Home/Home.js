import React, { useEffect, useState } from 'react';
import './Home.css'
import banner from '../../../Image/images/bannerbackground.png';
import Breakfast from '../Breakfast/Breakfast'
const Home = () => {
    const [breakfasts,setBreakfasts] = useState([])
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res=>res.json())
        .then(data=>setBreakfasts(data))
    },[])
 

    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="" />
                <h2 className='text-name'>Best food waiting for your belly.</h2>
                <input className='input' type="search" name="search" id="" placeholder='Search food items'/>
            </div>
            <div>
            </div>
            <div className='food-container'>
                <h1 className='text-center mt-4 text-primary'>Breakfast</h1>
                <div className="container my-5">
                    {
                        breakfasts.map(breakfast=><Breakfast 
                            breakfast={breakfast}
                            key={breakfast.id}
                        ></Breakfast>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;