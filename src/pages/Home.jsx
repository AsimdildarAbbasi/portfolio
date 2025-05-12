
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block">
                <span className="bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium">
                  Full Stack Developer
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
                I build <span className="text-coral">exceptional</span> web experiences
              </h1>
              
              <p className="text-lg text-slate max-w-lg">
                I'm a passionate JavaScript developer focused on creating beautiful, 
                functional applications that solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-navy hover:bg-navy/90 text-white px-8 py-6 rounded-lg">
                  <Link to="/projects">
                    View My Work
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 rounded-lg">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-2xl p-4 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Coding workspace"
                  className="rounded-lg"
                />
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-navy/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
            >
              My Skills & Expertise
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-slate"
            >
              Here are the technologies I work with to bring ideas to life
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'JavaScript', icon: '💻', description: 'My primary programming language' },
              { name: 'React.js', icon: '⚛️', description: 'Building interactive UIs' },
              { name: 'Node.js', icon: '🚀', description: 'Server-side applications' },
              { name: 'MongoDB', icon: '🍃', description: 'NoSQL database' },
              { name: 'HTML5 & CSS3', icon: '🎨', description: 'Creating responsive designs' },
              { name: 'Express.js', icon: '🛠️', description: 'Backend framework' },
              { name: 'RESTful APIs', icon: '🔄', description: 'Connecting services' },
              { name: 'Git', icon: '🔍', description: 'Version control' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-medium text-navy mb-1">{skill.name}</h3>
                <p className="text-sm text-slate/80">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4"
              >
                Featured Projects
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-slate max-w-lg"
              >
                Some of my recent work that showcase my skills and passion
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                <Link to="/projects">
                  View All Projects
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce platform with shopping cart, user authentication, and payment processing.',
                image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                liveLink: 'https://example.com',
                githubLink: 'https://github.com'
              },
          
              {
                title: 'Weather Dashboard',
                description: 'An interactive weather dashboard showing forecasts, historical data, and location-based weather information.',
                image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                tags: ['JavaScript', 'Chart.js', 'Weather API'],
                liveLink: 'https://example.com',
                githubLink: 'https://github.com'
              },
              {
                  id: 4,
                   title: 'Social Media API',
                   description: 'A RESTful API for a social media platform with features like user authentication, post creation, comments, and likes.',
                image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3 &     ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
               tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
                 category: 'Backend',
               liveLink: null,
                githubLink: 'https://github.com'
  },
  
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-2 text-navy">{project.title}</h3>
                    <p className="text-slate mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="bg-sand text-slate text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/projects`}
                      className="text-navy font-medium flex items-center hover:text-coral transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
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
              Let's Build Something Amazing Together
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8 text-lg"
            >
              I'm currently available for freelance projects, full-time positions,
              and collaborative opportunities. Let's discuss how I can help bring your ideas to life.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button asChild className="bg-coral hover:bg-coral/90 text-white px-8 py-6 rounded-lg shadow-lg">
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
