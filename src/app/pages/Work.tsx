import { motion } from "motion/react";
import { Mail, Linkedin, Github, Code, Video, Palette, Shield, Download } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageTransition } from "../components/PageTransition";
import { AnimatedGrid } from "../components/AnimatedGrid";

export function Work() {
  const skills = [
    {
      category: "Design",
      items: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "UI/UX Design"],
      icon: Palette,
    },
    {
      category: "Video Editing",
      items: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
      icon: Video,
    },
    {
      category: "Cyber Security",
      items: ["Network Security", "Ethical Hacking", "Penetration Testing", "Security Analysis"],
      icon: Shield,
    },
    {
      category: "Development",
      items: ["HTML/CSS", "JavaScript", "React", "Python", "Git"],
      icon: Code,
    },
  ];

  const portfolio = [
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwcG9ydGZvbGlvJTIwbW9ja3VwfGVufDF8fHx8MTc3NjM0MDY3Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Product Video Campaign",
      category: "Video Editing",
      image: "https://images.unsplash.com/photo-1583215794430-78a2c664751e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBjcmVhdGl2ZSUyMHN0dWRpb3xlbnwxfHx8fDE3NzYzMDYxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Social Media Content",
      category: "Content Creation",
      image: "https://images.unsplash.com/photo-1639426090332-69e939822d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMGNhbWVyYSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzYzNTU5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Tech Tutorials",
      category: "Video Content",
      image: "https://images.unsplash.com/photo-1775709610612-c589e29679ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NjMxMDI0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Security Awareness",
      category: "Educational Content",
      image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRpZ2l0YWx8ZW58MXx8fHwxNzc2MzQ1NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Creative Studio Setup",
      category: "Behind The Scenes",
      image: "https://images.unsplash.com/photo-1728281144091-b743062a9bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNpZ25lciUyMGRlc2t8ZW58MXx8fHwxNzc2MzU1OTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 relative">
        {/* Hero Section */}
        <section className="relative py-20 px-6 overflow-hidden">
          <AnimatedGrid />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
          
          {/* Floating tech elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-10 opacity-10"
          >
            <Code className="w-24 h-24 text-blue-400" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-10 opacity-10"
          >
            <Video className="w-20 h-20 text-cyan-400" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full blur-3xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400">Digital Marketing Editor</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Pramuditha Welivita
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              A creative professional specializing in graphic design, video editing, and content creation. 
              Currently pursuing undergraduate studies in Cyber Security.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4 inline mr-2" />
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
              <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-white/10 rounded-2xl p-8 md:p-12">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Digital Marketing Editor with expertise in creating compelling visual content 
                  that drives engagement and results. My work spans across graphic design, video production, and 
                  digital content creation, helping brands tell their stories effectively.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently pursuing my undergraduate degree in Cyber Security, I combine creative skills with 
                  technical knowledge to deliver innovative solutions that are both aesthetically pleasing and 
                  technically sound.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold">{skill.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-blue-400 mb-1">{project.category}</div>
                        <h3 className="font-bold text-lg">{project.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold">Digital Marketing Editor</h3>
                      <span className="text-blue-400">2023 - Present</span>
                    </div>
                    <p className="text-gray-400 mb-4">Freelance / Contract Work</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Created engaging visual content for social media campaigns</li>
                      <li>• Produced and edited promotional videos for brands</li>
                      <li>• Designed graphics and marketing materials</li>
                      <li>• Managed content creation workflows and timelines</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500/50 rounded-full" />
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold">Cyber Security Student</h3>
                      <span className="text-blue-400">2022 - Present</span>
                    </div>
                    <p className="text-gray-400 mb-4">University Undergraduate Program</p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Studying network security and ethical hacking</li>
                      <li>• Learning penetration testing and security analysis</li>
                      <li>• Developing skills in secure software development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
              <p className="text-xl text-gray-400 mb-12">
                I'm always open to new opportunities and collaborations
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="mailto:contact@pramuditha.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}