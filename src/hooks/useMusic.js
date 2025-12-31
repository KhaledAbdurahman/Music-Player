import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "fire sounds",
    artist: "KBBm9",
    url: "/songs/fire-sounds.wav",
    duration: "1:25",
  },
  {
    id: 2,
    title: "folk guitar",
    artist: "KBBm9",
    url: "/songs/folk-guitar.mp3",
    duration: "1:33",
  },
  {
    id: 3,
    title: "peacefull drone",
    artist: "KBBm9",
    url: "/songs/peacefull-drone.mp3",
    duration: "1:28",
  },
  {
    id: 4,
    title: "relaxing cinematic",
    artist: "KBBm9",
    url: "/songs/relaxing-cinematic.mp3",
    duration: "1:21",
  },
  {
    id: 5,
    title: "relaxing pads",
    artist: "KBBm9",
    url: "/songs/relaxing-pads.mp3",
    duration: "1:36",
  },
  {
    id: 6,
    title: "relaxing spacey",
    artist: "KBBm9",
    url: "/songs/relaxing-spacey.mp3",
    duration: "1:35",
  },
  {
    id: 7,
    title: "simple relaxing guitar",
    artist: "KBBm9",
    url: "/songs/simple-relaxing-guitar.mp3",
    duration: "1:48",
  },
  {
    id: 8,
    title: "water fall",
    artist: "KBBm9",
    url: "/songs/water-fall.mp3",
    duration: "1:30",
  },
];

export const useMusic = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
    setIsPlaying(false);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length;
      setCurrentTrack(allSongs[nextIndex]);

      return nextIndex;
    });
    setIsPlaying(false);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const prevIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
      setCurrentTrack(allSongs[prevIndex]);

      return prevIndex;
    });
    setIsPlaying(false);
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  return {
    allSongs,
    handlePlaySong,
    currentTrackIndex,
    currentTrack,
    setCurrentTime,
    currentTime,
    formatTime,
    duration,
    setDuration,
    nextTrack,
    prevTrack,
    play,
    pause,
    isPlaying,
    volume,
    setVolume,
  };
};
