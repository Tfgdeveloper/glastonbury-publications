import React, { useEffect, useState } from "react";
import Popup from "./Popup";

const ImagePopup = ({ image, alt = "popup image", onClose }) => {
  const [open, setOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);


  // Open after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center z-[999999]">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup box */}
      <div className="relative z-10 max-w-[90%] md:max-w-[900px]">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center hover:bg-gray-200"
        >
          ✕
        </button>

        {/* Image */}
        <img
          onClick={openPopup}
          src="images/ALA.png"
          alt={alt}
          className="rounded-2xl shadow-2xl w-full object-cover"
        />
      </div>
      <Popup isOpen={isPopupOpen} closePopup={closePopup} />
    </div>
  );
};

export default ImagePopup;