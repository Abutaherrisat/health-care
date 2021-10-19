import React, { useEffect, useState } from 'react';
import './Services.css'
import servicesData from '../Data/FakeData'
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() =>{
        setServices(servicesData)

    },[])
    return (
      <div>
            <div className ="services-container">
            {
                services.map(service => <Service
                key = {service.id}
                service = {service}
                >
                </Service>)
            }
            
        </div>
      </div>

    );
};

export default Services;