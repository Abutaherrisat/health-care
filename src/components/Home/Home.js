import React, { useEffect, useState } from 'react';
import servicesData from '../Data/FakeData'
import Default from '../Default/Default';
import './Home.css'

const Home = () => {
 const [services,setServices] = useState([]);
 useEffect(() =>{
     setServices(servicesData)
 },[])
 
    return (
        <div className = "default-service">
            {
                services.map(service =><Default
                    key = {service.id}
                    service = {service}
                
                ></Default>).slice(0,4)
            }
            
          
        </div>
    );
};

export default Home;