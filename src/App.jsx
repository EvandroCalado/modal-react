import { useState } from "react";
import Modal from "./components/Modal";

const airplane =
  "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const beach =
  "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const city =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bg, setBg] = useState(`url(${airplane})`);
  return (
    <div className="page" style={{ "--bg-image": bg }}>
      <Modal
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        closeButton={true}
        backdropClose={false}
      >
        <div>
          <h2>Choose your vacation</h2>
          <div>
            <button
              className="btn"
              onClick={() => {
                setBg(`url(${beach})`);
                setModalOpen(!modalOpen);
              }}
            >
              Beach
            </button>
            <button
              className="btn"
              onClick={() => {
                setBg(`url(${city})`);
                setModalOpen(!modalOpen);
              }}
            >
              City
            </button>
          </div>
        </div>
      </Modal>
      <div>
        <button className="btn" onClick={() => setModalOpen(true)}>
          Opan Modal
        </button>
      </div>
    </div>
  );
}

export default App;

