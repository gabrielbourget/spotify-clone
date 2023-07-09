"use client";

// -> Beyond codebase
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import uniqid from "uniqid";
// -> Within codebase
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

const UploadModal = () => {
  const { isOpen, onClose } = useUploadModal();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

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
    try {
      const imageFile = values.image?.[0];
      const audioFile = values.song?.[0];

      if (!imageFile || !audioFile || !user) {
        toast.error("Missing some fields, please complete the form");
        return;
      }

      const songStorageBucketID = uniqid();
      const imageStorageBucketID = uniqid();

      const { data: songData, error: songError } = await supabaseClient
        .storage.from("songs").upload(`song-${values.title}-${songStorageBucketID}`, audioFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        return toast.error("Failed song upload.");
      }

      const { data: imageData, error: imageError } = await supabaseClient
        .storage.from("image").upload(`image-${values.title}-${imageStorageBucketID}`, imageFile, {
          cacheControl: "3600",
          upsert: false,
        });
      
      if (imageError) {
        setIsLoading(false);
        return toast.error("Failed image upload.");
      }

      const { error: supabaseError } = await supabaseClient.from("songs").insert({
        user_id: user.id,
        title: values.title,
        author: values.author,
        image_path: imageData.path,
        song_path: songData.path,
      });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Your song was uploaded");
    } catch (err) {
      toast.error(`Something went wrong when uploading your song.`);
    } finally {
      setIsLoading(false);
    }
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
            accept="audio/mp3, audio/wav, audio/aiff"
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
