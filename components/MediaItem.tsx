"use client";

import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";

export type MediaItemProps = {
  onClick?: (id: string) => void;
  data: Song;
}

const MediaItem = (props: MediaItemProps) => {
  const { data: song, onClick } = props;
  const imageUrl = useLoadImage(song);

  const handleClick = () => {
    if (onClick) return onClick(song.id);
  }

  return (
    <div onClick={handleClick} className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 2-rull p-2 rounded-md">
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imageUrl || "/images/liked.png"}
          alt={`${song.author} - ${song.title}`}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{song.title}</p>
        <p className="text-neutral-400 text-sm truncate">{song.author}</p>
      </div>
    </div>
  )
}

export default MediaItem