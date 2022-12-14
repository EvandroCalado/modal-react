import { useEffect } from "react";

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  closeButton = true,
  backdropClose = false,
  id = "modal",
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e) e.preventDefault();
    if (!backdropClose || e.target.id !== id) return;

    setIsOpen(!isOpen);
  };

  return (
    <div id={id} className="backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        {closeButton && (
          <button
            type="button"
            className="modal-close"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
