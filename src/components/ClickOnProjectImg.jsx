/* eslint-disable react/prop-types */
import Button from './buttons/Button';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ClickOnProjectImg = ({ onClose, id }) => {
    const overlayRef = useRef();

    const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the overlay box
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose(); // Close the overlay
      }
    };

    // Attach event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handlePreview = () => {
    navigate(`/projectPreview/${id}`);
  };

  return (
    <div ref={overlayRef} className='absolute inset-0 bg-white/80 dark:bg-black/80 flex items-center justify-center gap-4 z-20 rounded-xl px-6'>
        <div className="w-1/2">
            <Button btnName="VISIT" />
        </div>
        <div className="w-1/2">
            <Button btnName="DEMO" onClick={handlePreview} />
        </div>
    </div>
  )
}

export default ClickOnProjectImg
