import React from 'react';
import ReactDOM from 'react-dom';
import { SCProps } from 'types/props';

const Portal = ({ children }: SCProps) => {
  const modalElement = document.querySelector('#modal-root');
  return modalElement ? ReactDOM.createPortal(children, modalElement) : null;
};

export default Portal;
