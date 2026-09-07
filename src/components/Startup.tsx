import { useEffect, useRef, useState } from "react";

export default function vidStartup({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setIsPlaying(false);
      onFinish();
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, [onFinish]);

  if (!isPlaying) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="w-full h-full object-cover"
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
}
