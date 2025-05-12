import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Github, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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
            Get In <span className="text-coral">Touch</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-slate">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl font-bold text-navy">
                Let's Chat
              </h2>
              
              <p className="text-slate">
                Whether you have a project in mind, a question about my services, or just 
                want to say hello, I'd be happy to hear from you. Fill out the form and I'll 
                get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 p-3 rounded-full">
                    <Mail className="text-navy w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Email</h3>
                    <a href="mailto:hello@example.com" className="text-slate hover:text-coral transition-colors">
                      asimabbasi1029@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 p-3 rounded-full">
                    <Phone className="text-navy w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Phone</h3>
                    <a href="tel:+1234567890" className="text-slate hover:text-coral transition-colors">
                  +923449164088
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-navy/5 p-3 rounded-full">
                    <MapPin className="text-navy w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy">Location</h3>
                    <p className="text-slate">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="font-medium text-navy mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/AsimdildarAbbasi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy/5 p-3 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/asim-abbasi-61471825b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-navy/5 p-3 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:asimabbasi1029@gmail.com"
                    className="bg-navy/5 p-3 rounded-full hover:bg-navy hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="font-serif text-2xl font-bold text-navy mb-6">
                Send Me a Message
              </h2>
              
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
  <div className="container-custom">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="font-serif text-3xl font-bold text-navy mb-8 text-center"
    >
      Find Me in Islamabad, Pakistan
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-xl overflow-hidden shadow-lg h-96"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425289.990508182!2d72.75644458172908!3d33.616250942072355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746771412149!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Islamabad Location"
      ></iframe>
    </motion.div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-serif text-3xl font-bold text-navy mb-16 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: 'What is your typical process for new projects?',
                answer: 'My process typically starts with an initial consultation to understand your needs and goals. From there, I create a project plan, develop wireframes or prototypes, implement the solution with regular check-ins, and conclude with testing and launch. Throughout the process, I maintain open communication to ensure we\'re aligned.'
              },
              {
                question: 'How long does a project usually take?',
                answer: 'Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. During our initial consultation, I\'ll provide a more accurate timeline based on your specific requirements.'
              },
              ,
              {
                question: 'What types of projects do you work on?',
                answer: 'I specialize in JavaScript-based web applications, including React frontend development, Node.js backend systems, e-commerce platforms, content management systems, and interactive web experiences. I enjoy tackling diverse projects that solve real problems.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
