import { motion } from "motion/react";
import { Link } from "react-router";
import { Briefcase, Music, Gamepad2, ArrowRight, Sparkles } from "lucide-react";
import { PageTransition } from "../components/PageTransition";

export function Home() {
  const identities = [
    {
      path: "/work",
      icon: Briefcase,
      title: "Professional",
      subtitle: "Digital Marketing Editor",
      description: "Graphic Designer • Video Editor • Content Creator",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500 to-cyan-500",
      hoverGradient: "group-hover:from-blue-500/30 group-hover:to-cyan-500/30",
    },
    {
      path: "/music",
      icon: Music,
      title: "Artist",
      subtitle: "Music Producer",
      description: "YouTube Content • Spotify Releases",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500 to-pink-500",
      hoverGradient: "group-hover:from-purple-500/30 group-hover:to-pink-500/30",
    },
    {
      path: "/gaming",
      icon: Gamepad2,
      title: "Gaming",
      subtitle: "KiNA",
      description: "Streaming • Highlights • Community",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500 to-emerald-500",
      hoverGradient: "group-hover:from-green-500/30 group-hover:to-emerald-500/30",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          />

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Welcome to my digital universe</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-4"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                Pramuditha Welivita
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400"
            >
              Creative Technologist | Artist | Gamer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-4 text-gray-500"
            >
              Undergraduate in Cyber Security
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {identities.map((identity, index) => {
              const Icon = identity.icon;
              return (
                <motion.div
                  key={identity.path}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                >
                  <Link to={identity.path} className="group block h-full">
                    <div className="relative h-full">
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${identity.borderGradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                      />
                      
                      {/* Card */}
                      <div
                        className={`relative h-full backdrop-blur-xl bg-gradient-to-br ${identity.gradient} ${identity.hoverGradient} border border-white/10 rounded-2xl p-8 transition-all duration-500 group-hover:border-white/20 group-hover:scale-105`}
                      >
                        {/* Border gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${identity.borderGradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                        />

                        <div className="relative z-10">
                          <div className="mb-6">
                            <div
                              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${identity.borderGradient} p-3 mb-4`}
                            >
                              <Icon className="w-full h-full text-white" />
                            </div>
                          </div>

                          <h3 className="text-3xl font-bold mb-2">
                            {identity.title}
                          </h3>
                          <p className="text-xl text-gray-300 mb-3">
                            {identity.subtitle}
                          </p>
                          <p className="text-gray-500 mb-6">
                            {identity.description}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                            <span>Explore</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}