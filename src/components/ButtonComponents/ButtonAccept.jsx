import React, { useState } from "react";
import { Modal } from "antd";

const ButtonAccept = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="submit-list-c">
        <button className="submit-list" onClick={showModal}>
          submit
        </button>
      </div>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="modal-text">
          Are you sure you want to submit your courses?
        </p>
      </Modal>
    </div>
  );
};

export default ButtonAccept;
