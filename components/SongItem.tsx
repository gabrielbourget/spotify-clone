"use client";

import { Song } from "@/types";

type SongItemProps = {
  onClick: (id: string) => void;
  data: Song;
}

const SongItem = (props: SongItemProps) => {
  const { onClick, data } = props;
  return (
    <div>SongItem</div>
  )
}

export default SongItem