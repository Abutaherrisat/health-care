import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import servicesData from '../Data/FakeData'

const Details = () => {
    const { serviceId } = useParams()

    const newSelected = servicesData.find(service => service.id == serviceId);

    return (
        <div className="row">
            <div className="service-style  ">

                <div className="img-style pt-3 text-center">
                    <img className='img-style text-center ' src={newSelected.img} alt="" />
                </div>
                <div className="card-body mx-3 pt-5">
                    <h4>NAME : {newSelected.name}</h4>
                    <p>PRICE : {newSelected.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;