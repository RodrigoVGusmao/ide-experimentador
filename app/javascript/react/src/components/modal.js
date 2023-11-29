import React, { useState } from 'react';
import ImgAsset from './public';
import './modal.css'; // Certifique-se de ter o arquivo de estilo CSS correspondente

export default function Modal() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleButtonClick = (buttonName) => {
    openModal();
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('battery')}>modal</button>

      {isModalOpen && (
        <div onClick={closeModal} className="modal-overlay">
          <div onClick={(e) => e.stopPropagation()} className="modal">
            <button className="close-button" onClick={closeModal}>
              <img className='close' src={ImgAsset.modal_close} alt="Close" onClick={closeModal} />
            </button>
            <button onClick={() => handleButtonClick('battery')}>
              <img className='battery' src={ImgAsset.modal_battery} alt="Battery" />
            </button>
            <button onClick={() => handleButtonClick('location')}>
              <img className='location' src={ImgAsset.modal_location} alt="Location" />
            </button>
            <button onClick={() => handleButtonClick('speed')}>
              <img className='speed' src={ImgAsset.modal_speed} alt="Speed" />
            </button>
            <button onClick={() => handleButtonClick('skills')}>
              <img className='skills' src={ImgAsset.modal_skills} alt="Skills" />
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
