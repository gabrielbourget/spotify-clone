"use client";

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "@/types";

type PageContentProps = {
  songs: Song[];
}

const PageContent = (props: PageContentProps) => {
  const { songs } = props;
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return (
      <div className="mt-4 text-netural-400">
        No songs available.
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols08 gap-4 mt-4">
      {
        songs.map((song: Song) => (
          <SongItem
            key={song.id}
            onClick={(id: string) => onPlay(id)}
            data={song}
          />
        ))
      }
    </div>
  )
}

export default PageContent
