"use client";

// -> Beyond codebase
import useAuthModal from "@/hooks/useAuthModal";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
// -> Within codebase
import useOnPlay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

export type LibraryProps = {
  songs: Song[];
}

const Library = (props: LibraryProps) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = useUser();
  
  const { songs } = props;
  
  const onClick = () =>{
    if (!user) return authModal.onOpen();

    // if (!subscription) return subscribeModal.onOpen();

    return uploadModal.onOpen();
  }

  const onPlay = useOnPlay(songs);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-md text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {
          songs.map((song) => (
            <MediaItem
              onClick={(id: string) => onPlay(id)}
              key={song.id}
              data={song}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Library;
