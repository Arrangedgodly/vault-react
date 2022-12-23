import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ isOpen, handleClose }) {
  return (
    <Modal show={isOpen} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you would like to delete the selected count? This action can not be reversed.
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Delete Count
          </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;