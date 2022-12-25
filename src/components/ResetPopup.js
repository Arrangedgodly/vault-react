import Popup from "./Popup";

function ResetPopup({ isOpen, handleClose, handleSubmit }) {
  return (
    <Popup
      modalTitle="Reset Confirmation"
      modalText="Are you sure you would like to reset this count? This action cannot be reversed."
      modalButtonText="Reset Count"
      isOpen={isOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
    />
  )
}

export default ResetPopup;