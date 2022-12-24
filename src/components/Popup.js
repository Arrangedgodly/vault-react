import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup({ modalTitle, modalText, modalButtonText, isOpen, handleClose, handleSubmit }) {
  return (
    <Modal show={isOpen} onHide={handleClose} className='popup' >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalText}
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {modalButtonText}
          </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default Popup;