import { ExternalLink, Github, Play } from "lucide-react"; // Play icon is no longer strictly needed for the video, but can be kept for other purposes

const Projects = () => {
  // --- Updated Projects Data with videoUrl ---
  const projects = [
    {
      title: "LinuxChooser",
      description: "An intelligent survey platform that analyzes user preferences and system requirements to recommend the perfect Linux distribution. Features interactive questionnaires, detailed compatibility analysis, and personalized recommendations. We used:",
      tags: ["React", "TypeScript", "Algorithm", "Survey Engine"],
      gradient: "from-neon-green/20 to-neon-blue/20",
      videoUrl: "/videos/linuxchooser-preview.mp4", // Path to your video in public folder
    },
    {
      title: "ConvertX",
      description: "Revolutionary file conversion platform supporting traditional formats and creative extensions like .banana and .latte. Converting XLSX to MP3 or PDF to MP4? No problem. The ultimate universal converter. We used:",
      tags: ["Node.js", "WebAssembly", "React", "APIs"],
      gradient: "from-neon-blue/20 to-neon-green/20",
      videoUrl: "/videos/convertx-preview.mp4", // Path to your video in public folder
    },
    {
      title: "USB Backup Pro",
      description: "Seamless backup solution for USB drives and local folders. Simply insert your drive, select it, and get a comprehensive zip backup ready for download. Perfect for data protection and migration. We used:",
      tags: ["React", "TypeScript", "Libraries", "APIs"],
      gradient: "from-neon-green/20 to-neon-blue/20",
      videoUrl: "/videos/usbbackup-preview.mp4", // Path to your video in public folder
    }
  ];

  return (
    <section id="projects-section" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-neon-blue">OUR</span>{" "}
            <span className="text-foreground">FEATURED</span>{" "}
            <span className="text-neon-green">PROJECTS</span>
          </h2>
          <div className="h-1 w-24 bg-neon-blue mx-auto mb-8 neon-glow"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing our latest innovations and breakthrough solutions that push 
            the boundaries of what's possible in web development.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl gradient-card border border-muted hover:border-neon-green transition-all duration-500 hover:scale-[1.02]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-black mb-4 text-foreground group-hover:text-neon-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground border border-muted-foreground/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* The Live Demo and Code buttons div has been removed from here */}
                </div>
                
                {/* --- Video Embedding Here --- */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-background/50 rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center group-hover:border-neon-green/50 transition-colors duration-300 overflow-hidden">
                    {project.videoUrl ? ( // Check if videoUrl exists
                      <video
                        src={project.videoUrl}
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay  // Video will start playing automatically
                        loop      // Video will loop continuously
                        muted     // Video will be muted (required for autoplay in most browsers)
                        playsInline // Important for mobile devices (plays inline, not fullscreen)
                        preload="metadata" // Optimizes loading by only getting metadata initially
                        controls={true} // Add browser's default controls (play/pause, volume, etc.)
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      // Fallback if no videoUrl is provided for a project
                      <div className="text-center">
                        <Play className="w-16 h-16 text-muted-foreground group-hover:text-neon-green transition-colors duration-300 mx-auto mb-4" />
                        <p className="text-muted-foreground font-medium">Video Preview Not Available</p>
                        <p className="text-sm text-muted-foreground/70 mt-1">Check back soon!</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-neon-blue rounded-full animate-pulse delay-300"></div>
                </div>
                {/* --- End Video Embedding --- */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;