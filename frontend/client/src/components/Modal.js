import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal() {
  return  ReactDOM.createPortal(
    
    <div className="ui dimmer modals visible active">
      hello world
      
    </div>,
    document.querySelector('#modal')
  )
}
