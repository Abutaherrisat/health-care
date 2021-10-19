import React from 'react';
import './banner.css'


const Banner = () => {
    return (
        <div>
            <div className="banner-container row">
                <div className="describe col-md-6">
                    <h1>Hello Everyone</h1>
                    <p>We Are Import The Best Medicine In The World.We Are Suggested You The Best Medicine. And Our Medicine Have No Side Effect</p>
                </div>
                <div className="banner-img col-md-6">
                    <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlj3AS3gczyyMRlmoRH84lfCgo2MhY7n3uQ&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;