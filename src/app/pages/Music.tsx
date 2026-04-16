import { motion } from "motion/react";
import { Play, Music2, Youtube, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageTransition } from "../components/PageTransition";
import { FloatingElements } from "../components/FloatingElements";
import { StreamingPlatforms } from "../components/StreamingPlatforms";
import { MusicPlayer } from "../components/MusicPlayer";

export function Music() {
  const releases = [
    {
      title: "Latest Release",
      type: "Single",
      image: "https://images.unsplash.com/photo-1704643770744-154e115d454d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG11c2ljJTIwd2F2ZXMlMjBwdXJwbGV8ZW58MXx8fHwxNzc2MzU2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Midnight Dreams",
      type: "EP",
      image: "https://images.unsplash.com/photo-1629923759854-156b88c433aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBhbGJ1bSUyMGFydHxlbnwxfHx8fDE3NzYzNTYwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Urban Nights",
      type: "Single",
      image: "https://images.unsplash.com/photo-1611939341783-a44f2cbd3bbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHMlMjBwdXJwbGV8ZW58MXx8fHwxNzc2MzU0Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen relative">
        {/* Floating Elements Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <FloatingElements />
        </div>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642426028488-04f91c79d233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvJTIwbmlnaHR8ZW58MXx8fHwxNzc2MzU2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Music Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-pink-500/20" />

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-purple-300">Music Artist</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                Pramuditha Welivita
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Creating soundscapes that move souls. Music producer, composer, and audio engineer.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium flex items-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Latest Release
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/20 rounded-full font-medium hover:bg-white/5 backdrop-blur-sm transition-colors flex items-center gap-2"
                >
                  <Music2 className="w-5 h-5" />
                  All Music
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </motion.div>
          </motion.div>

          {/* Parallax particles */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-40 left-20 w-4 h-4 bg-purple-400 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-60 right-40 w-6 h-6 bg-pink-400 rounded-full blur-sm"
          />
        </section>

        {/* Playable Music Cards Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Tracks
              </h2>
              <p className="text-gray-400 text-lg">
                Listen to my latest releases
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <MusicPlayer
                title="Neon Dreams"
                artist="Pramuditha Welivita"
                image="https://images.unsplash.com/photo-1771013304270-171dba40834d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGVsZWN0cm9uaWMlMjBtdXNpYyUyMGFsYnVtJTIwYXJ0JTIwcHVycGxlfGVufDF8fHx8MTc3NjM1ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                type="latest"
              />
              <MusicPlayer
                title="Electric Pulse"
                artist="Pramuditha Welivita"
                image="https://images.unsplash.com/photo-1706466615917-e44750d177d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwc3ludGh3YXZlJTIwYWxidW0lMjBjb3ZlcnxlbnwxfHx8fDE3NzYzNTg1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                type="popular"
              />
            </div>

            {/* Additional tracks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MusicPlayer
                title="Midnight Vibes"
                artist="Pramuditha Welivita"
                image="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZCUyMGNsb3NlLXVwJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc2MzU4NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              />
              <MusicPlayer
                title="Cosmic Journey"
                artist="Pramuditha Welivita"
                image="https://images.unsplash.com/photo-1610716632424-4d45990bcd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwZXF1aXBtZW50JTIwc3R1ZGlvJTIwbmlnaHR8ZW58MXx8fHwxNzc2MzU4NTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              />
              <MusicPlayer
                title="Synthwave Sunset"
                artist="Pramuditha Welivita"
                image="https://images.unsplash.com/photo-1704643770744-154e115d454d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG11c2ljJTIwd2F2ZXMlMjBwdXJwbGV8ZW58MXx8fHwxNzY2MzU2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>
        </section>

        {/* Streaming Platforms Marquee */}
        <StreamingPlatforms />

        {/* Artist Bio */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-950/20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Artist
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My journey in music began with a simple passion for creating sounds that evoke emotions. 
                As a producer and composer, I blend electronic elements with organic instruments to craft 
                unique sonic experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From ambient soundscapes to energetic beats, my music explores the boundaries of genre 
                and emotion. Each track tells a story, inviting listeners into a world of sound.
              </p>
            </motion.div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-bold">YouTube Channel</h2>
                <motion.a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                  <span>Subscribe</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Featured Video */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-2"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-10 h-10 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-bold mb-2">Featured: Latest Music Video</h3>
                      <p className="text-gray-300">Official music video for my latest release</p>
                    </div>
                  </div>
                </motion.div>

                {/* Video Thumbnails */}
                {[1, 2, 3, 4].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-sm font-medium">Production Tutorial #{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Spotify Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl font-bold">Spotify Releases</h2>
                <motion.a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                >
                  <Music2 className="w-6 h-6" />
                  <span>Listen on Spotify</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {releases.map((release, index) => (
                  <motion.div
                    key={release.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all">
                      <div className="aspect-square overflow-hidden relative">
                        <ImageWithFallback
                          src={release.image}
                          alt={release.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-purple-400 mb-1">{release.type}</div>
                        <h3 className="font-bold text-lg">{release.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">Pramuditha Welivita</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Spotify Embed Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8 text-center"
              >
                <Music2 className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-2xl font-bold mb-2">Listen on Spotify</h3>
                <p className="text-gray-400 mb-6">Stream my latest tracks and playlists</p>
                <motion.a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 bg-green-600 rounded-full font-medium hover:bg-green-500 transition-colors"
                >
                  Open Spotify
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">Visual Gallery</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...releases, ...releases.slice(0, 5)].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover hover:brightness-110 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-purple-950/20 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Connected
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                Follow my journey and never miss a release
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-red-600 rounded-lg hover:bg-red-500 transition-colors flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube
                </motion.a>
                <motion.a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500 transition-colors flex items-center gap-2"
                >
                  <Music2 className="w-5 h-5" />
                  Spotify
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}