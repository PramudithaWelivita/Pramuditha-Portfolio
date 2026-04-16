import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

export function StreamingPlatforms() {
  // Major streaming platforms with icons/names
  const platforms = [
    { name: "Spotify", color: "#1DB954" },
    { name: "Apple Music", color: "#FC3C44" },
    { name: "YouTube Music", color: "#FF0000" },
    { name: "Amazon Music", color: "#00A8E1" },
    { name: "Tidal", color: "#000000" },
    { name: "Deezer", color: "#FF0092" },
    { name: "Pandora", color: "#3668FF" },
    { name: "SoundCloud", color: "#FF5500" },
    { name: "Bandcamp", color: "#1DA0C3" },
    { name: "Audiomack", color: "#FFA200" },
    { name: "Napster", color: "#00B4B3" },
    { name: "Qobuz", color: "#0B0E42" },
    { name: "JioSaavn", color: "#2BC5B4" },
    { name: "Gaana", color: "#E9192E" },
    { name: "Wynk Music", color: "#E60023" },
    { name: "Hungama", color: "#FF0000" },
    { name: "Anghami", color: "#A140FF" },
    { name: "JOOX", color: "#00B0FF" },
    { name: "KKBOX", color: "#FF6600" },
    { name: "Boomplay", color: "#FF6B35" },
    { name: "iHeartRadio", color: "#C6002B" },
    { name: "TuneIn", color: "#14D8CC" },
    { name: "LiveXLive", color: "#FF0050" },
    { name: "Mixcloud", color: "#314359" },
    { name: "ReverbNation", color: "#E43326" },
    { name: "Yandex Music", color: "#FFCC00" },
    { name: "VK Music", color: "#4680C2" },
    { name: "NetEase", color: "#E72E2D" },
    { name: "QQ Music", color: "#31C27C" },
    { name: "KuGou", color: "#2196F3" },
    { name: "Kuwo", color: "#FF6B35" },
    { name: "Melon", color: "#00CD3C" },
    { name: "Genie", color: "#00D0F5" },
    { name: "Bugs", color: "#FF6B35" },
    { name: "FLO", color: "#FF0066" },
    { name: "AWA", color: "#FF5722" },
    { name: "LINE MUSIC", color: "#00B900" },
    { name: "RecMusic", color: "#FF6B35" },
    { name: "Beatport", color: "#94D500" },
    { name: "Traxsource", color: "#FF6600" },
    { name: "7digital", color: "#0088CC" },
    { name: "eMusic", color: "#FF6600" },
    { name: "HDtracks", color: "#000000" },
    { name: "Presto Music", color: "#8B0000" },
    { name: "Nugs.net", color: "#FF6B35" },
    { name: "Primephonic", color: "#1E3A8A" },
    { name: "IDAGIO", color: "#000000" },
    { name: "Slacker Radio", color: "#00A8E1" },
    { name: "Resso", color: "#FF3B5C" },
    { name: "Mdundo", color: "#FF6B35" },
    { name: "Audiius", color: "#CC0FE0" },
    { name: "Tribe of Noise", color: "#FF6600" },
    { name: "Jamendo", color: "#FF6B35" },
    { name: "8tracks", color: "#2F4F4F" },
    { name: "Jango", color: "#FF6B35" },
  ];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Available on 55+ Platforms
          </h2>
          <p className="text-gray-400 text-lg">
            Stream my music anywhere, anytime
          </p>
        </motion.div>
      </div>

      {/* First row - moving right */}
      <Marquee gradient={false} speed={40} className="mb-6">
        {platforms.slice(0, 28).map((platform, index) => (
          <motion.div
            key={`${platform.name}-1-${index}`}
            whileHover={{ scale: 1.1, y: -5 }}
            className="mx-4 px-6 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl hover:border-purple-500/50 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: platform.color }}
              />
              <span className="font-medium whitespace-nowrap text-sm">
                {platform.name}
              </span>
            </div>
          </motion.div>
        ))}
      </Marquee>

      {/* Second row - moving left */}
      <Marquee gradient={false} speed={40} direction="right">
        {platforms.slice(28).map((platform, index) => (
          <motion.div
            key={`${platform.name}-2-${index}`}
            whileHover={{ scale: 1.1, y: -5 }}
            className="mx-4 px-6 py-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl hover:border-pink-500/50 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: platform.color }}
              />
              <span className="font-medium whitespace-nowrap text-sm">
                {platform.name}
              </span>
            </div>
          </motion.div>
        ))}
      </Marquee>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              55+
            </div>
            <div className="text-gray-400">Platforms</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              195+
            </div>
            <div className="text-gray-400">Countries</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-400">Available</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
