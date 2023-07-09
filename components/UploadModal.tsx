"use client";

// -> Beyond codebase
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// -> Within codebase
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    }
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {

  };


  return (
    <Modal
      title="Add a Song"
      description="Upload a song to the service"
      isOpen={isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        
      </form>
    </Modal>
  )
}

export default UploadModal;
