
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

// Project data - in a real app, this would come from an API or database
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with shopping cart, user authentication, and payment processing using Stripe.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
 
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard showing forecasts, historical data, and location-based weather information.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    tags: ['JavaScript', 'Chart.js', 'Weather API'],
    category: 'Frontend',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'A RESTful API for a social media platform with features like user authentication, post creation, comments, and likes.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Backend',
    liveLink: null,
    githubLink: 'https://github.com'
  },
  {
    id: 5,
    title: 'Recipe Finder App',
    description: 'A web application that helps users discover recipes based on ingredients they have at home. Features filters for dietary restrictions.',
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    tags: ['React', 'CSS Grid', 'Food API'],
    category: 'Frontend',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    id: 6,
    title: 'Real-Time Chat Application',
    description: 'A chat application with real-time messaging, user presence indicators, and file sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    tags: ['React', 'WebSocket', 'Node.js', 'Express'],
    category: 'Full Stack',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com'
  }
];

const categories = ['All', 'Frontend', 'Backend', ''];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold text-navy mb-6 text-center"
          >
            My <span className="text-coral">Projects</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-slate">
              A showcase of my skills, passion, and creative problem-solving
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          {/* Filters */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category 
                      ? 'bg-navy text-white' 
                      : 'bg-slate-100 text-slate hover:bg-slate-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="w-full md:w-auto"
            >
              <input
                type="text"
                placeholder="Search projects..."
                className="px-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-coral w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 py-20 text-center">
                <h3 className="text-xl text-slate font-medium mb-2">No projects found</h3>
                <p className="text-slate/70">
                  Try changing your filters or search term
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-navy mb-16 text-center"
          >
            Client Testimonials
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart',
                quote: 'Working with this developer was a fantastic experience. They delivered our e-commerce platform on time and exceeded our expectations with additional features.',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Marketing Director, CreativeHub',
                quote: 'Not only is their technical skill impressive, but their communication and problem-solving abilities made our project a success. Highly recommended!',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Emily Chen',
                role: 'Founder, DesignWorks',
                quote: 'I appreciate their attention to detail and commitment to quality. Our web application has received numerous compliments on its design and functionality.',
                image: 'https://randomuser.me/api/portraits/women/68.jpg'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-serif font-semibold text-navy">{testimonial.name}</h3>
                    <p className="text-slate/70 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="text-slate mb-4 italic">
                  "{testimonial.quote}"
                </div>
                
                <div className="flex text-coral">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Let's Work Together */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
            >
              Have a Project in Mind?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8 text-lg"
            >
              I'm always interested in hearing about new projects and opportunities.
              Let's discuss how we can work together to bring your ideas to life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button 
                className="bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Start a Conversation
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
