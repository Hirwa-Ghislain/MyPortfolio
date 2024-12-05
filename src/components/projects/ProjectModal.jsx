'use client';
import { motion } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-4xl bg-background/95 rounded-xl shadow-lg my-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-foreground/10 z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Media - Video or Image */}
        <div className="w-full aspect-video rounded-t-xl overflow-hidden">
          {project.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project.video.url} type="video/mp4" />
            </video>
          ) : project.images?.[0] ? (
            <div className="relative w-full h-full">
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>
          ) : null}
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[60vh] p-6 space-y-8">
          {/* Project Title and Date */}
          <div>
            <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
            <p className="text-muted mt-1">{new Date(project.date).toDateString()}</p>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-foreground/90 text-lg">{project.description}</p>
            {project.longDescription && (
              <p className="text-foreground/80">{project.longDescription}</p>
            )}
          </div>

          {/* Additional Images */}
          {project.images?.length > 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((img, idx) => (
                  <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${project.name} screenshot ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-foreground/10 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Info */}
          {project.info && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Additional Information</h3>
              <p className="text-foreground/80 whitespace-pre-wrap">{project.info}</p>
            </div>
          )}

          {project.otherDetails && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Other Details</h3>
              <p className="text-foreground/80">{project.otherDetails}</p>
            </div>
          )}

          {/* Links */}
          <div className="flex justify-end space-x-4 pt-4">
            
            {project.demoLink && (
              <a
                href="#"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-foreground/10 hover:bg-foreground/20"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;