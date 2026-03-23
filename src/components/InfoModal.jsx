export function InfoModal({ title, onClose, children }) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel">
        <header className="modal-header">
          <h2 id="info-modal-title">{title}</h2>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>
        <div className="modal-body">{children}</div>
        <footer className="modal-footer">
          <button type="button" className="modal-ok" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
