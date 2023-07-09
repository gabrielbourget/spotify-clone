"use client";

// -> Beyond codebase
// -> Within codebase
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) onClose();
  }

  return (
    <Modal
      title="Upload Modal"
      description="Upload a song to the service"
      isOpen={isOpen}
      onChange={onChange}
    >
      Upload modal content
    </Modal>
  )
}

export default UploadModal;
