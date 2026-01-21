// src/components/pages/Loading.js
import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="spinner"></div>
      <h1 className="loading-brand">SNB</h1>
    </div>
  );
};

export default Loading;
