'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight } from "lucide-react";

const ProjectLayout = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsModalOpen(true)}
        className="w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg cursor-pointer hover:bg-foreground/5 transition-all group"
      >
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {props.name}
            </h2>
            <p className="text-sm text-muted">{props.description}</p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted whitespace-nowrap">
              {new Date(props.date).toDateString()}
            </p>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
          </div>
        </div>
      </motion.div>

      <ProjectModal
        project={props}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ProjectLayout;