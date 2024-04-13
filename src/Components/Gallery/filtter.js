import React, { useState } from 'react';
import "./filtter.css";
import i1 from "../img/1.svg";
import i2 from "../img/2.svg";
import i3 from "../img/3.svg";
import i4 from "../img/4.svg";
import i5 from "../img/5.svg";
import i6 from  "../img/6.svg";
import i7 from "../img/7.svg";

const FilterImage = () => {
    const [activeFilter, setActiveFilter] = useState('All Menu');

    const handleFilterClick = (value) => {
        setActiveFilter(value);
    };

    const images = [
        { src:i1, filter: 'food' },
        { src:i2, filter: 'food' },
        { src:i3, filter: 'food' },
        { src:i4, filter: 'food' },
        { src:i5, filter: 'car' },
        { src:i6, filter: 'car' },
        { src:i7, filter: 'car' },
        { src:i1, filter: 'car' },
        { src:i2, filter: 'house' },
        { src:i3, filter: 'house' },
        { src:i4, filter: 'house' },
        { src:i5, filter: 'house' },
        { src:i6, filter: 'travel' },
        { src:i7, filter: 'travel' },
        { src:i2, filter: 'travel' },
        { src:i3, filter: 'travel' },
        { src:i6, filter: 'travels' },
        { src:i7, filter: 'travels' },
        { src:i2, filter: 'travels' },
        { src:i3, filter: 'travels' },
    ];

    return (
        <section className='gallery_img'>
            {/* <h1>Filter Image</h1> */}
            <ul>
                {/* <li id='no' className={activeFilter === 'All Menu' ? 'active' : ''} onClick={() => handleFilterClick('All Menu')}>All</li> */}
                <li className={activeFilter === 'Food' ? 'active' : ''} onClick={() => handleFilterClick('Food')}>WEDDING</li>
                <li className={activeFilter === 'Car' ? 'active' : ''} onClick={() => handleFilterClick('Car')}>ENGAGEMENT</li>
                <li className={activeFilter === 'House' ? 'active' : ''} onClick={() => handleFilterClick('House')}>PUBERTY</li>
                <li className={activeFilter === 'Travel' ? 'active' : ''} onClick={() => handleFilterClick('Travel')}>BIRTHDAY PARTY</li>
                <li className={activeFilter === 'Travels' ? 'active' : ''} onClick={() => handleFilterClick('Travels')}>CORPORATE EVENTS</li>
            </ul>

            <div className="product">
                {images.map((image, index) => (
                    (activeFilter === 'All Menu' || image.filter === activeFilter.toLowerCase()) && (
                        <img key={index} src={image.src} alt={`Image ${index + 1}`} />
                    )
                ))}
            </div>
        </section> 
    );
};

export default FilterImage;
