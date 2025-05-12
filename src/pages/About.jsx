import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
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
            About <span className="text-coral">Me</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-slate">
              Get to know the person behind the code
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="mypic.jpeg"alt="Profile"
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-coral/20 w-32 h-32 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 bg-navy/20 w-32 h-32 rounded-full blur-2xl -z-10"></div>
            </motion.div>
            
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl font-bold text-navy">
                Hello, I'm <span className="text-coral">Asim Abbasi</span>
              </h2>
              
              <p className="text-slate">
                I'm a passionate full-stack JavaScript developer with a love for creating beautiful, 
                functional web applications. My journey in tech began over 2 years ago when I built 
                my first website, and I've been hooked ever since.
              </p>
              
              <p className="text-slate">
                What drives me is the perfect blend of creative and analytical thinking that coding 
                requires. I enjoy solving complex problems and turning ideas into reality through clean, 
                efficient code. When I'm not coding, you can find me hiking in nature, reading science 
                fiction, or experimenting with new recipes in the kitchen.
              </p>
              
              <p className="text-slate">
                I believe in continuous learning and staying curious. The tech world evolves rapidly, 
                and I'm committed to growing with it. Every project is an opportunity to learn something 
                new and improve my craft.
              </p>
              
              <div className="pt-4">
                <Button asChild className="bg-navy hover:bg-navy/90 text-white">
                  <a href="/AsimAbbasi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                 <a href="">this is my resume </a>
                    <ArrowRight size={18} className="ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-navy mb-16 text-center"
          >
            My Journey
          </motion.h2>
          
          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-navy/20"></div>
            
            {/* Timeline Items */}
            {[
              {
                year: '2023',
                title: '',
                //company: 'Tech Innovators Inc.',
                //description: 'Leading development of enterprise applications using React, Node.js, and cloud infrastructure.'
              },
              {
                year: '2021',
                //title: 'Full-Stack Developer',
                //company: 'Digital Solutions Co.',
                //description: 'Built and maintained web applications for clients across various industries.'
              },
              {
                year: '2019',
                //title: 'Front-End Developer',
                //company: 'Creative Web Studio',
                //description: 'Created responsive interfaces and implemented client-side functionality using modern JavaScript.'
              },
              {
                year: '2018',
                //title: 'Computer Science Degree',
                //company: 'University of Technology',
                //description: 'Graduated with honors, focusing on web development and software engineering.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'left-timeline' : 'right-timeline'
                }`}
              >
                <div className={`flex items-center ${
                  index % 2 === 0 
                    ? 'flex-row' 
                    : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-1/2 ${
                    index % 2 === 0 
                      ? 'pr-8 text-right' 
                      : 'pl-8 text-left'
                  }`}>
                    <span className="text-coral font-medium">{item.year}</span>
                    <h3 className="font-serif text-xl font-semibold text-navy mt-1">
                      {item.title}
                    </h3>
                    <p className="text-navy/70 font-medium mt-1">{item.company}</p>
                    <p className="text-slate mt-2">{item.description}</p>
                  </div>
                  
                  {/* Middle Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-coral rounded-full border-4 border-white z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Personal Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6 text-center"
          >
            What I Value
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-slate max-w-2xl mx-auto mb-16"
          >
            The principles that guide my work and approach to development
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'User-Centered Design',
                description: 'I believe in creating products that solve real problems for real people. Every line of code should contribute to a better user experience.',
                icon: '👤'
              },
              {
                title: 'Continuous Learning',
                description: 'The tech landscape evolves rapidly, and I\'m committed to growing with it. I dedicate time to learn new tools and techniques.',
                icon: '📚'
              },
              {
                title: 'Clean, Maintainable Code',
                description: 'Writing code is about communication—with computers and future developers. I strive for clarity, simplicity, and maintainability.',
                icon: '✨'
              },
              {
                title: 'Collaboration',
                description: 'The best products come from diverse perspectives working together. I value open communication and collaborative problem-solving.',
                icon: '🤝'
              },
              {
                title: 'Attention to Detail',
                description: 'The small things matter. From pixel-perfect designs to optimized performance, I care about getting the details right.',
                icon: '🔍'
              },
              {
                title: 'Work-Life Balance',
                description: 'Burnout doesn\'t lead to good code. I believe in sustainable work patterns that allow for creativity and well-being.',
                icon: '⚖️'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-slate">{value.description}</p>
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
              Want to Work Together?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8 text-lg"
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button asChild className="bg-coral hover:bg-coral/90 text-white">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
              
              <Button asChild className="bg-coral hover:bg-coral/90 text-white">
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
