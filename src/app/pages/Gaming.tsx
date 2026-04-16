import { motion } from "motion/react";
import { Gamepad2, Twitch, Youtube, MessageSquare, Users, Trophy, Play, Zap } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageTransition } from "../components/PageTransition";
import { AnimatedCounter } from "../components/AnimatedCounter";

export function Gaming() {
  const highlights = [
    {
      title: "Epic Victory Royale",
      game: "Battle Royale",
      views: "125K",
      image: "https://images.unsplash.com/photo-1635372730136-06b29022281c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb250cm9sbGVyJTIwZXNwb3J0c3xlbnwxfHx8fDE3NzYzMDc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Insane Clutch",
      game: "FPS Championship",
      views: "89K",
      image: "https://images.unsplash.com/photo-1616093700899-dddbfc0fe7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb24lMjBsaWdodHN8ZW58MXx8fHwxNzc2MjcyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Speedrun Record",
      game: "Adventure Quest",
      views: "203K",
      image: "https://images.unsplash.com/photo-1760999896198-b7e780e42500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBzZXR1cCUyMHB1cnBsZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzYzNTYwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const stats = [
    { label: "Followers", value: 45, suffix: "K+", icon: Users },
    { label: "Total Views", value: 2.5, suffix: "M+", icon: Play },
    { label: "Achievements", value: 150, suffix: "+", icon: Trophy },
    { label: "Win Rate", value: 76, suffix: "%", icon: Zap },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-black" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.25, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -200, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728330458318-70438beffc44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eSUyMGJsdWV8ZW58MXx8fHwxNzc2MzU2MDYzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cyberpunk City"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
          </div>

          <div className="relative z-10 text-center max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Glowing Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-50" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full backdrop-blur-sm">
                    <span className="text-cyan-300 font-bold">PROFESSIONAL GAMER</span>
                  </div>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-7xl md:text-9xl font-black mb-6 relative"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  KiNA
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl md:text-3xl text-gray-300 mb-12"
              >
                Elite Gamer • Content Creator • Community Leader
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 group-hover:border-cyan-500/60 transition-all">
                        <Icon className="w-6 h-6 text-cyan-400 mb-2 mx-auto" />
                        <div className="text-3xl font-bold text-cyan-300 mb-1">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-lg flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  <Gamepad2 className="w-6 h-6" />
                  Watch Highlights
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-bold text-lg hover:bg-cyan-500/10 backdrop-blur-sm transition-colors flex items-center gap-2"
                >
                  <Users className="w-6 h-6" />
                  Join Discord
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gaming Highlights */}
        <section className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Epic Highlights
                  </span>
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                >
                  View All
                  <Play className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Card */}
                      <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl overflow-hidden group-hover:border-cyan-500/60 transition-all backdrop-blur-sm">
                        <div className="relative aspect-video overflow-hidden">
                          <ImageWithFallback
                            src={highlight.image}
                            alt={highlight.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                          
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.8)]">
                              <Play className="w-8 h-8 ml-1" />
                            </div>
                          </div>

                          {/* Views Badge */}
                          <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-cyan-500/30">
                            <span className="text-sm text-cyan-300">{highlight.views} views</span>
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="text-sm text-blue-400 mb-1">{highlight.game}</div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {highlight.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Streaming Platforms */}
        <section className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Watch Me Live
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Twitch */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm group-hover:border-purple-500/80 transition-all">
                    <Twitch className="w-16 h-16 text-purple-400 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">Twitch</h3>
                    <p className="text-gray-300 mb-6">
                      Live streams every Tuesday & Friday at 8PM
                    </p>
                    <motion.a
                      href="https://twitch.tv"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-3 bg-purple-600 rounded-lg font-bold hover:bg-purple-500 transition-colors"
                    >
                      Follow on Twitch
                    </motion.a>
                  </div>
                </motion.div>

                {/* YouTube Gaming */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-orange-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-2xl p-8 backdrop-blur-sm group-hover:border-red-500/80 transition-all">
                    <Youtube className="w-16 h-16 text-red-400 mb-4" />
                    <h3 className="text-3xl font-bold mb-2">YouTube Gaming</h3>
                    <p className="text-gray-300 mb-6">
                      Full gameplay videos, tutorials & highlights
                    </p>
                    <motion.a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-3 bg-red-600 rounded-lg font-bold hover:bg-red-500 transition-colors"
                    >
                      Subscribe
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Discord Community */}
        <section className="py-20 px-6 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl" />
              
              {/* Content */}
              <div className="relative bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-2 border-cyan-500/50 rounded-2xl p-12 text-center backdrop-blur-sm">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <MessageSquare className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Join the Community
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Connect with fellow gamers, get exclusive content, participate in tournaments, 
                  and be part of an amazing community!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="w-5 h-5 text-cyan-400" />
                    <span>5,000+ Members</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                  <div className="flex items-center gap-2 text-gray-300">
                    <Trophy className="w-5 h-5 text-cyan-400" />
                    <span>Weekly Tournaments</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                  <div className="flex items-center gap-2 text-gray-300">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span>24/7 Active</span>
                  </div>
                </div>

                <motion.a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  Join Discord Server
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Setup Showcase */}
        <section className="py-20 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Battle Station
                </span>
              </h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/50 group-hover:border-cyan-500/80 transition-all">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1616093700899-dddbfc0fe7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb24lMjBsaWdodHN8ZW58MXx8fHwxNzc2MjcyNjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Gaming Setup"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}