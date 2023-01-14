import { Overlay, ModalContainer } from './Modal.styled'
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ addImg, toggleModal }) => {
    
    useEffect(() => {
        // console.log('монтируем');
        window.addEventListener('keydown', addKeyDown);
        return () => {
            // console.log('размонтируем');
            window.removeEventListener('keydown', addKeyDown);
        }
    });
    const addKeyDown = evt => {
            if (evt.code === 'Escape') {
                // console.log('закрити');
                toggleModal();
            }
        }

    const addOverlay = evt => {
        if (evt.currentTarget === evt.target) {
            toggleModal();
        }
    }

        return createPortal(
        <Overlay onClick={addOverlay}>
            <ModalContainer >
                <img src={addImg} alt="Img" />
            </ModalContainer>
        </Overlay>,modalRoot)
};
