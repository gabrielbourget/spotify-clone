"use client";

// -> Beyond codebase
// -> Within codebase
import Modal from "./Modal";

const AuthModal = () => {
  return (
    <Modal
      title="Welcome back"
      description="Login to your account"
      isOpen
      onChange={() => {}}
    >
      Auth modal content
    </Modal>
  )
}

export default AuthModal