import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div  className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${
      show ? 'block' : 'hidden'
    }`} onClick={onClose}>
      <div className="bg-white w-full max-w-6xl m-4 rounded-lg shadow-lg" onClick={e => e.stopPropagation()}>
        <span className=" absolute text-4xl bg-black close top-5 right-10 text-white rounded-full px-3 cursor-pointer " onClick={onClose}>&times;</span>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
