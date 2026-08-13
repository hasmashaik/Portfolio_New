import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaEnvelope, FaUser, FaSubject } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ loading: false, success: false, error: '' }), 5000);
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.error || 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In <span className="text-neon">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-neon mx-auto mt-3 rounded-full" />
          <p className="text-light-gray mt-4">Have a question or want to work together? Let's talk.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-dark/50 p-6 md:p-8 rounded-xl border border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-light-gray mb-1">
                <FaUser className="inline mr-2 text-neon" /> Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg text-white focus:border-neon focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-light-gray mb-1">
                <FaEnvelope className="inline mr-2 text-neon" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg text-white focus:border-neon focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-light-gray mb-1">
              <FaSubject className="inline mr-2 text-neon" /> Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg text-white focus:border-neon focus:outline-none transition-colors"
              placeholder="Subject"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-light-gray mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-dark/50 border border-gray-700 rounded-lg text-white focus:border-neon focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            disabled={status.loading}
            className={`mt-6 w-full py-3 font-semibold rounded-lg transition-all ${
              status.loading
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-neon text-dark hover:bg-neon/80 shadow-lg shadow-neon/20'
            }`}
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>

          {status.success && (
            <p className="mt-4 text-neon text-sm text-center">Message sent successfully!</p>
          )}
          {status.error && (
            <p className="mt-4 text-red-500 text-sm text-center">{status.error}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;