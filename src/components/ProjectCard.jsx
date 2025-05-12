
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveLink, githubLink } = project;
  
  return (
    <div className="card-hover bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
            >
              <LinkIcon size={16} className="text-navy" />
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
            >
              <Github size={16} className="text-navy" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-navy">{title}</h3>
        <p className="text-slate mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-sand text-slate border-none">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between gap-4">
          {liveLink && (
            <Button asChild className="flex-1 bg-navy hover:bg-navy/90">
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <LinkIcon size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          
          {githubLink && (
            <Button asChild variant="outline" className="flex-1 border-navy text-navy hover:bg-navy hover:text-white">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Source
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
