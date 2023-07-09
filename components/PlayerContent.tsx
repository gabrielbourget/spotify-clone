"use client";

import { useState } from "react";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiMiniSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";
import Slider from "./Slider";

type PlayerContentProps = {
  song: Song;
  songUrl: string;
}

const PlayerContent = (props: PlayerContentProps) => {
  const { song, songUrl } = props;
  const [volume, setVolume] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const player = usePlayer();

  const Icon = (isPlaying) ? BsPauseFill: BsPlayFill;
  const VolumeIcon = (volume === 0) ? HiSpeakerXMark : HiMiniSpeakerWave;

  const onPlayNext = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];

    if (!nextSong) return player.setId(player.ids[0]);

    player.setId(nextSong);
  };
  
  const onPlayPrev = () => {
    if (player.ids.length === 0) return;

    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const prevSong = player.ids[currentIndex - 1];

    if (!prevSong) return player.setId(player.ids[player.ids.length -1]);

    player.setId(prevSong);
  }; 
  

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <MediaItem data={song} />
        <div style={{ marginRight: 15 }}></div>
        <LikeButton songId={song.id} />
      </div>

      {/* Mobile size controls */}
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={() => {}}
          className="h-10 w-10 flex items-center jsutify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon className="text-black" size={30} />
        </div>
      </div>

      {/* Desktop size controls */}
      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onPlayPrev}
        />
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
          onClick={() => {}}
        >
          <Icon className="text-black" size={30} />
        </div>
        <AiFillStepForward
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          onClick={onPlayNext}
        />
      </div>

      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={() => {}}
            className="cursor-pointer"
            size={34}
          />
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default PlayerContent