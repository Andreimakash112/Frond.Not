import React from 'react';
import './ModalBox.css';

function ModalBox({setModalBox}) {
  return (
<>
    <div className="echo" onClick ={() =>setModalBox('none')}>
    </div>
    <div className="ModalBox">



    </div>
    
</>
  );
}

export default ModalBox;