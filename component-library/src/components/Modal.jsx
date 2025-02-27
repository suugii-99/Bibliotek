import React from 'react';

const Modal = ({ show, onClose, size, children }) => {
  if (!show) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
      <div className={`bg-white rounded shadow-lg p-4 ${size}`}>
        <button onClick={onClose} className="absolute top-2 right-2">Stäng</button>
        {children}
      </div>
    </div>
  );
};

Modal.Header = ({ children }) => <h2 className="text-xl">{children}</h2>;
Modal.Body = ({ children }) => <div className="mt-4">{children}</div>;
Modal.Footer = ({ children }) => <div className="mt-4">{children}</div>;

export default Modal;
