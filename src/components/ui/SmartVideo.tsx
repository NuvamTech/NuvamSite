import React, { useEffect, useRef, useState } from 'react';

interface SmartVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
  playsInline?: boolean;
  showControls?: boolean;
  onError?: (e: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
}

export const SmartVideo: React.FC<SmartVideoProps> = ({
  src,
  className = '',
  style,
  loop = true,
  playsInline = true,
  showControls = true,
  onError,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Play/Pause toggle
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Playback failed", err);
      });
    }
  };

  // Mute/Unmute toggle
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);

    if (!newMuted) {
      window.dispatchEvent(new CustomEvent('smartvideo-unmute', {
        detail: { videoElement: videoRef.current }
      }));
    }
  };

  // Keep state updated in case external factors change video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolumeChange = () => {
      setIsMuted(video.muted);
      if (!video.muted) {
        window.dispatchEvent(new CustomEvent('smartvideo-unmute', {
          detail: { videoElement: video }
        }));
      }
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, []);

  // Listen to other videos being unmuted
  useEffect(() => {
    const handleGlobalUnmute = (e: Event) => {
      const customEvent = e as CustomEvent<{ videoElement: HTMLVideoElement }>;
      if (videoRef.current && customEvent.detail?.videoElement !== videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    };

    window.addEventListener('smartvideo-unmute', handleGlobalUnmute);
    return () => {
      window.removeEventListener('smartvideo-unmute', handleGlobalUnmute);
    };
  }, []);

  // IntersectionObserver for auto playback
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Half of the player is visible, start running/play
            video.play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.log("Auto-play prevented", err));
          } else {
            // Screen is not viewed or <50% visible, pause
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.5, // 50% visibility threshold
      }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
      style={style}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        loop={loop}
        playsInline={playsInline}
        muted={isMuted}
        onError={onError}
      />
      
      {showControls && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/15 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 pointer-events-auto shadow-lg hover:scale-105 z-10">
          {/* Play/Pause Button */}
          <button 
            type="button" 
            onClick={togglePlay} 
            className="text-white/90 hover:text-white transition-colors p-1 flex items-center justify-center focus:outline-none"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Divider */}
          <div className="w-px h-4 bg-white/20" />

          {/* Mute/Unmute Button */}
          <button 
            type="button" 
            onClick={toggleMute} 
            className="text-white/90 hover:text-white transition-colors p-1 flex items-center justify-center focus:outline-none"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.37.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.26v3.91zM19 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm1.91-3.61l-1.45 1.45c.67.65 1.19 1.45 1.46 2.34l2.04-.68c-.42-1.4-1.25-2.62-2.39-3.66zM14 3.23v2.06c2.89.86 5 3.54 5 6.71 0 1.25-.33 2.43-.91 3.46l1.47 1.47C20.57 15.35 21 13.73 21 12c0-4.78-3.32-8.77-7.77-9.77z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM19 12c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7s-3.13-7-7-7v2c2.76 0 5 2.24 5 5zM3 9v6h4l5 5V4L7 9H3z"/>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
