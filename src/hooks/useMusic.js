import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "fire sounds",
    artist: "KBBm9",
    url: "/songs/fire-sound.mp3",
    duration: "00:32",
  },
  {
    id: 2,
    title: "folk guitar",
    artist: "KBBm9",
    url: "/songs/folk-guitar.mp3",
    duration: "00:33",
  },
  {
    id: 3,
    title: "peacefull drone",
    artist: "KBBm9",
    url: "/songs/peacefull-drone.mp3",
    duration: "00:28",
  },
  {
    id: 4,
    title: "relaxing cinematic",
    artist: "KBBm9",
    url: "/songs/relaxing-cinematic.mp3",
    duration: "00:21",
  },
  {
    id: 5,
    title: "relaxing pads",
    artist: "KBBm9",
    url: "/songs/relaxing-pads.mp3",
    duration: "00:36",
  },
  {
    id: 6,
    title: "relaxing spacey",
    artist: "KBBm9",
    url: "/songs/relaxing-spacey.mp3",
    duration: "00:35",
  },
  {
    id: 7,
    title: "simple relaxing guitar",
    artist: "KBBm9",
    url: "/songs/simple-relaxing-guitar.mp3",
    duration: "00:48",
  },
  {
    id: 8,
    title: "water fall",
    artist: "KBBm9",
    url: "/songs/water-fall.mp3",
    duration: "00:30",
  },
];

export const useMusic = () => {
  const [AllSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return {
    AllSongs,
    handlePlaySong,
    currentTrackIndex,
    currentTrack,
    setCurrentTime,
    currentTime,
    formatTime,
    duration,
  };
};
