import { Overlay, ModalContainer } from './Modal.styled'
import { createPortal } from 'react-dom';
import { Component } from 'react';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.addKeyDown);

    }
   
    componentWillUnmount() {
        window.removeEventListener('keydown', this.addKeyDown);
    }

     addKeyDown = evt => {
         if (evt.code === 'Escape') {
                console.log('object закрити');
                this.props.toggleModal();
            }
     }
    addOverlay = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.toggleModal();
        }
    }


    render() {
            return createPortal(
        <Overlay onClick={this.addOverlay}>
            <ModalContainer >
                <img src={this.props.addImg} alt="Img" />
            </ModalContainer>
        </Overlay>,modalRoot)
        
    }

}