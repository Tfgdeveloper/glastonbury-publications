import React, { useRef, useState, useEffect } from "react";
import { Maximize2, Volume2, VolumeX, Play, Pause } from "lucide-react"; // Added Play and Pause icons

const CustomVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted, good for autoplay
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0); // For the progress bar

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Event listeners for updating state
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleMuteChange = () => setIsMuted(video.muted);
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("volumechange", handleMuteChange);
    video.addEventListener("fullscreenchange", handleFullscreenChange);
    video.addEventListener("timeupdate", handleTimeUpdate);

    // Initial mute state (useful if autoplaying, otherwise can start unmuted)
    video.muted = isMuted;

    return () => {
      // Cleanup event listeners
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("volumechange", handleMuteChange);
      video.removeEventListener("fullscreenchange", handleFullscreenChange);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [isMuted]); // Depend on isMuted to re-apply initial mute state if it changes

  // Toggle play/pause
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => console.error("Error entering fullscreen:", err));
    } else {
      document.exitFullscreen();
    }
    // State will be updated by the 'fullscreenchange' event listener
  };

  // Handle progress bar click/drag
  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const progressBar = e.currentTarget;
    const clickX = e.clientX - progressBar.getBoundingClientRect().left;
    const width = progressBar.offsetWidth;
    const clickRatio = clickX / width;
    video.currentTime = clickRatio * video.duration;
  };

  return (
    <article className="overflow-hidden rounded-xl bg-white  ring-1 ring-black/5">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full "
          // Remove 'controls' here because we're building custom ones
         
          muted={isMuted} // Ensure initial state is applied
          loop // Optional: loop the video
          playsInline // Recommended for iOS
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls Overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/50 to-transparent p-2 opacity-100 transition-opacity duration-300 hover:opacity-100">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/70 p-4 rounded-full"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>

          {/* Bottom Control Bar */}
          <div className="w-full flex items-center gap-3">
            {/* Mute Button */}
            <button
              onClick={toggleMute}
              className="text-white bg-black/70 p-2 rounded-full"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Progress Bar */}
            <div
              className="flex-grow h-2 bg-gray-500 rounded-full cursor-pointer relative"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-red-600 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="text-white bg-black/70 p-2 rounded-full"
              aria-label="Toggle Fullscreen"
            >
              <Maximize2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CustomVideoPlayer;