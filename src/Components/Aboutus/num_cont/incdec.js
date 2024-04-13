
import React from 'react';
import "./appps.css";
import NumberCounters from './num';


const Incdec = () => {
  return (
    <>
    {/* <About/> */}

    <div className='out_container'>



      <h1>
      Grow with Vivid Events
      </h1>
    <div className='out-lone_box'>
    <div className='flxe'>
      <div className='flx1'>
      <NumberCounters endCount={7} label="Years" />
      <NumberCounters endCount={11} label="Services"  className=" spp"/>
      </div>
      
      <div className='flx2'>
      <NumberCounters endCount={57} label="Events"  className="spp"/>
      <NumberCounters endCount={78} label="Happy Couples" />
      </div>
      
    </div>
    </div>
    </div>
   
    
    </>
   
  );
};

export default Incdec;
