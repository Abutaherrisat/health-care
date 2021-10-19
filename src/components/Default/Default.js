import React from 'react';
import { Link } from 'react-router-dom';
import './Default.css'

const Default = (props) => {
    const { name, img, price ,id,description} = props.service
    return (
        <div className ="row">
            <div className="service-style">
                 <div className="img-style text-center pt-3">
                    <img className ="img-style" src={img} alt="" />
                </div>
                <div className="card-body mx-3 pt-5">
                    <h4>NAME : {name}</h4>
                    <p>PRICE : {price}</p>
                    <p>description : {description}</p>
                    <Link to= {`/details/${id}`}>
                        <button className="btn-regular text-center ">Select Order</button>

                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Default;