"use client";

// -> Beyond codebase
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// -> Within codebase
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Modal from "./Modal";

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song Title"
        />
      </form>
    </Modal>
  )
}

export default UploadModal;
