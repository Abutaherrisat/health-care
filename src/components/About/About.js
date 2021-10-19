import React from 'react';
import './About.css'


const About = () => {


    return (
        <div className="container">
            <h3 className="mt-5">hello Everyone In Our Company We Are Sugester You The Best Organic MediCine WithOut Any Duplicate</h3>
            <p>We Have The Best Chemist In the Word.they Are make Medicine Very Craefully.Here we Are Intruducing Our Best Chemist</p>
            <div className="expert-container">
                <div className='m-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlj3AS3gczyyMRlmoRH84lfCgo2MhY7n3uQ&usqp=CAU" className="card-img" alt="..." />
                    <div >
                        <h5 className="card-title">Dr.Sara</h5>
                    </div>
                </div>
                <div className='m-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJouBqNcYhcUb5DA9Hxdhvit-rdY9fz0prA&usqp=CAU" className="card-img" alt="..." />
                    <div>
                        <h5 className="card-title">DR .Andy</h5>
                    </div>
                </div>
                <div className='m-5'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOMNHntnMmrWEsRS0ypaA1S9HCkNIxl-yxg&usqp=CAU" className="card-img" alt="..." />
                    <div >
                        <h5 className="card-title">Dr . Charlo</h5>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;