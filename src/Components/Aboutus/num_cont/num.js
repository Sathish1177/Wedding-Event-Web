import React, { useState, useEffect, useRef } from 'react';
import './num.css'; // Import CSS for styling

const NumberCounters = ({ endCount, label }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        }
      },
      {
        threshold: 0.5, // Change this threshold value as needed
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isCounting) {
      const timer = setInterval(() => {
        if (count < endCount) {
          setCount(prevCount => prevCount + 1);
        } else {
          clearInterval(timer);
        }
      }, 60); // Adjust speed of counting animation here

      return () => clearInterval(timer);
    }
  }, [count, endCount, isCounting]);

  return (
    <div className="number-counter" ref={counterRef}>
      <div className="count">{count.toLocaleString()} +</div>
      <div className='line'></div>
      {/* <div className='line'></div> */}
      <div className="label">{label}</div>
    </div>
  );
};

export default NumberCounters;






// import React, { useState, useEffect } from 'react';
// import './num.css'; 

// const NumberCounters = ({ endCount, label }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (count < endCount) {
//         setCount(prevCount => prevCount + 1);
//       } else {
//         clearInterval(timer);
//       }
//     }, 50); 

//     return () => clearInterval(timer);
//   }, [count, endCount]);

//   return (
//     <div className="number-counter">
//       <div className="count">{count.toLocaleString()} +</div>
     
//       <div className='line'></div>
      
//       <div className="label">{label}</div>
//     </div>
//   );
// };

// export default NumberCounters;





// import React, { useState, useEffect } from 'react';
// import './num.css'; // Import CSS for styling

// const NumberCounters = ({ endCount, label }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (count < endCount) {
//         setCount(prevCount => prevCount + 1);
//       } else {
//         clearInterval(timer);
//       }
//     }, 50); 

//     return () => clearInterval(timer);
//   }, [count, endCount]);

//   return (
//     <div className="number-counter">
//       <div className="count">{count}</div>
//       <div className="label">{label}</div>
//     </div>
//   );
// };

// export default NumberCounters;
