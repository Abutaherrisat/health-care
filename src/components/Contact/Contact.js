import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

const Contact = () => {
    const location = <FontAwesomeIcon icon={faMapMarker} />
    const message = <FontAwesomeIcon icon={faEnvelope} />
    const phone = <FontAwesomeIcon icon={faPhone} />
    return (
        <div className="text-center">
            <h2> {location}Medicine Care</h2>
            <h3>{message}Level-4, 34, Awal Centre, Banani, Dhaka</h3>
            <h3>{phone} Helpline : 01322810867 (Available : 09:00am to 7:00pm)</h3>
        </div>



    );
};

export default Contact;