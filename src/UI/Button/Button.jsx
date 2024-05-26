import React from 'react';
import './Button.css';

export const Button = ({ onClick }) => {
  return (
    <button className="copy_btn" onClick={onClick}>COPY</button>
  );
}
