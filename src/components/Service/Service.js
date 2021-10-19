import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'

const Service = (props) => {
    const { name, img, price, id } = props.service

    return (
        <div className="row">
            <div className="service-style ">

                <div className="img-style pt-3 text-center">
                    <img className='img-style text-center ' src={img} alt="" />
                </div>
                <div className="card-body mx-3 pt-5">
                    <h4>NAME : {name}</h4>
                    <p>PRICE : {price}</p>
                    <Link to= {`/details/${id}`}>
                        <button className="btn-regular text-center ">Select Order</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;