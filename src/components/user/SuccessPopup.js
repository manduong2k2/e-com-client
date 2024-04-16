import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

function PopupWithProgressBar() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) {
    return <Redirect to='/' />;
  }

  return (
    <div className="popup">
      <p>Login success</p>
      {}
      <div className="progress-bar"></div>
    </div>
  );
}

export default PopupWithProgressBar;
