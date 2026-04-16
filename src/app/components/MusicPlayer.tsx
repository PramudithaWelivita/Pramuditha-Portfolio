import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MusicPlayerProps {
  title: string;
  artist: string;
  image: string;
  audioUrl?: string;
  type?: "latest" | "popular";
}

export function MusicPlayer({ title, artist, image, type = "latest" }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Simulate playback
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
      
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
        {/* Type Badge */}
        {type && (
          <div className="absolute top-4 left-4 z-10">
            <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
              type === "latest" 
                ? "bg-gradient-to-r from-purple-500/80 to-pink-500/80" 
                : "bg-gradient-to-r from-yellow-500/80 to-orange-500/80"
            }`}>
              {type === "latest" ? "🔥 Latest" : "⭐ Popular"}
            </div>
          </div>
        )}

        {/* Album Art */}
        <div className="relative aspect-square overflow-hidden">
          <motion.div
            animate={isPlaying ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Play button overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" fill="white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              )}
            </motion.div>
          </motion.div>

          {/* Animated visualizer when playing */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-1 p-4">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [4, Math.random() * 30 + 10, 4],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.05,
                  }}
                  className="w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
                />
              ))}
            </div>
          )}
        </div>

        {/* Player Controls */}
        <div className="p-6">
          {/* Song Info */}
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-1 truncate">{title}</h3>
            <p className="text-sm text-gray-400 truncate">{artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{Math.floor(progress * 2.4 / 60)}:{String(Math.floor(progress * 2.4 % 60)).padStart(2, '0')}</span>
              <span>4:00</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLiked(!liked)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Heart
                className={`w-5 h-5 ${liked ? "fill-pink-500 text-pink-500" : "text-gray-400"}`}
              />
            </motion.button>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <SkipBack className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" fill="white" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" fill="white" />
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <SkipForward className="w-5 h-5" />
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Volume2 className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
