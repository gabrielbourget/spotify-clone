"use client";

// -> Beyond codebase
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// -> Within codebase
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";

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
        className="flex flex-col gap-y-4"
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song Title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song Author"
        />

        <div className="">
          <div className="pb-1">
            Select a song file
          </div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>
        
        <div className="">
          <div className="pb-1">
            Select a song image
          </div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>

        <Button disabled={isLoading} type="submit">
          Upload Song
        </Button>
      </form>
    </Modal>
  )
}

export default UploadModal;
