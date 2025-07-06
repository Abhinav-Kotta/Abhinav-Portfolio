'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import BlurText from '@/TextAnimations/BlurText/BlurText';
import AnimatedContent from '@/Animations/AnimatedContent/AnimatedContent';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const formElement = e.target as HTMLFormElement;
      
      // Send notification to portfolio owner (simple form data)
      const notificationResult = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        'default_template', // Use default template for notification
        formElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      // Send auto-reply to user (simple approach without template)
      try {
        // Create a simple auto-reply email
        const autoReplyParams = {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Abhinav Kotta',
          from_email: 'abhinavkotta.io@gmail.com',
          subject: 'Thank you for reaching out - Abhinav Kotta',
          message: `Hello ${formData.name},

Thank you for contacting me through my portfolio! I've received your message and will get back to you as soon as possible.

Your message:
${formData.message}

I typically respond within 24-48 hours. If you have an urgent inquiry, feel free to reach out to me directly at abhinavkotta.io@gmail.com.

Best regards,
Abhinav Kotta
Software Developer`
        };

        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
          'default_template', // Use default template for auto-reply
          autoReplyParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
        );
      } catch (autoReplyError) {
        console.warn('Auto-reply failed, but notification was sent:', autoReplyError);
        // Don't fail the entire submission if auto-reply fails
      }

      if (notificationResult.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send email');
      }

      // After sending the notification to yourself, add this block:
      if (process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
        try {
          const autoReplyParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Abhinav Kotta',
            reply_to: 'abhinavkotta.io@gmail.com',
          };

          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
            autoReplyParams,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
          );
        } catch (autoReplyError) {
          console.warn('Auto-reply failed, but notification was sent:', autoReplyError);
          // Don't fail the entire submission if auto-reply fails
        }
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "abhinavkotta.io@gmail.com",
      gradient: "linear-gradient(145deg,#4F46E5,#1a1a3d)",
      borderColor: "#4F46E5",
      url: "mailto:abhinavkotta.io@gmail.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/akotta03",
      gradient: "linear-gradient(210deg,#10B981,#1a1a3d)",
      borderColor: "#10B981",
      url: "https://linkedin.com/in/akotta03"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/abhinav-kotta",
      gradient: "linear-gradient(165deg,#F59E0B,#1a1a3d)",
      borderColor: "#F59E0B",
      url: "https://github.com/abhinav-kotta"
    }
  ];

  const handleContactClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient overlay - removed for transparency */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <BlurText
              text="Get In Touch"
              className="cool-title text-4xl md:text-5xl font-bold justify-center mb-4"
              animateBy="words"
            />
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                Let's Connect
              </h3>
              
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className="relative p-6 rounded-2xl border-2 border-transparent transition-all duration-300 cursor-pointer hover:scale-105"
                    style={{
                      background: method.gradient,
                      borderColor: method.borderColor,
                    }}
                    onClick={() => handleContactClick(method.url)}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-black/20 backdrop-blur-sm group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold text-lg">{method.title}</h4>
                        <p className="text-gray-200 text-sm">{method.value}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm"
              >
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Skills & Expertise
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Full-Stack Development (React, Next.js, Node.js)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    AI/ML & HPC Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    Cloud Infrastructure & DevOps
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative p-8 rounded-3xl border-2 border-transparent overflow-hidden"
                   style={{
                     background: "linear-gradient(145deg,#667eea,#764ba2,#f093fb,#f5576c,#4facfe)",
                     backgroundSize: "400% 400%",
                   }}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                        placeholder="What's on your mind?"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : submitStatus === 'success' ? (
                        <div className="flex items-center justify-center gap-2">
                          <span>✓</span>
                          Message Sent!
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </form>

                  {submitStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-red-400 text-sm text-center"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 