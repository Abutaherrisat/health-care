import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'



const Footer = () => {
    const location = <FontAwesomeIcon icon={faMapMarker} />
    const message = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />

    return (
        <div className="footer-container row  d-flex w-100 pt-10">
            <div className="col-lg-4  col-md-4 col-sm-12">
                <div className=" ms-5 text-white ">
                    <h2>Medicine Care</h2>
                    <p>{location} Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p>{message} Official: medicinecare@gmail.com</p>
                    <p>{phone} Helpline : 01322810867 (Available : 09:00am to 7:00pm)</p>
                </div>
            </div>
            <div className="col-lg-4  col-md-4 col-sm-6">
                <div className=" ms-5 text-white ">
                    <p className="icon"> <i class="fab fa-instagram-square"></i> Instagram</p>
                    <p className="icon"><i class="fab fa-facebook"></i> Facebook</p>
                    <p className="icon"><i class="fab fa-twitter"></i> Twitter</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
                <div className=" ms-5 text-white ">
                    <h3>pay with</h3>
                    <p>Mstered Card</p>
                    <p>Paypal</p>
                    <p>NOGOD</p>
                    <p>ROCKET</p>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
                </div>
            </div>
            <p className="text-center text-white"> Copyright © 2021 medicine-care.com</p>
        </div>
    );
};

export default Footer;