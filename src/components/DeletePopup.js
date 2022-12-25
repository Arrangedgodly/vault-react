import Popup from "./Popup";

function DeletePopup({ isOpen, handleClose, handleSubmit }) {
  return (
    <Popup
      modalTitle="Delete Confirmation"
      modalText="Are you sure you would like to delete this count? This action cannot be reversed."
      modalButtonText="Delete Count"
      isOpen={isOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
    />
  );
}

export default DeletePopup;