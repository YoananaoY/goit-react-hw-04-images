import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const loadingTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1000);

    return () => {
      // Clear the timer if the component unmounts before the delay is finished
      clearTimeout(loadingTimer);
    };
  }, []);

  // Simulate loading animation (replace with your preferred spinner component)
  return showLoader ? (
    <div className="Loader">
      <div className="spinner">Loading...</div>
    </div>
  ) : null;
};

export default Loader;
