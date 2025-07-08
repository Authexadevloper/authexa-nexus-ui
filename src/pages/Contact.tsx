
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@authexa.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "San Francisco, CA",
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Support",
      value: "24/7 Available",
      description: "AI agents always online"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1426] text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00F5FF] to-purple-300 bg-clip-text text-transparent font-mono">
              Get In Touch
            </h1>
            <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
              Ready to transform your IT operations? Let's discuss how Authexa can help your organization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-xl bg-gradient-to-br from-[#0B1426] to-slate-800/50 border border-[#00F5FF]/30 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 text-white font-mono">Send Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-[#00F5FF]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-[#00F5FF]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-[#00F5FF]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-[#00F5FF]/30 rounded-lg text-white placeholder-[#64748B] focus:border-[#00F5FF] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-[#00F5FF] to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00F5FF]/25 transition-all duration-300 font-mono"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-white font-mono mb-8">Contact Information</h2>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-[#0B1426] to-slate-800/50 border border-[#00F5FF]/30 backdrop-blur-sm"
                >
                  <div className="p-3 rounded-lg bg-[#00F5FF]/20 border border-[#00F5FF]/30">
                    <info.icon className="h-6 w-6 text-[#00F5FF]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white font-mono">{info.title}</h3>
                    <p className="text-[#00F5FF] font-medium">{info.value}</p>
                    <p className="text-[#64748B] text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Demo Request */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#00F5FF]/10 to-purple-500/10 border border-[#00F5FF]/30 backdrop-blur-sm text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4 font-mono">Ready for a Demo?</h3>
                <p className="text-[#64748B] mb-6">
                  See Authexa in action with a personalized demonstration
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#00F5FF] to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00F5FF]/25 transition-all duration-300 font-mono"
                >
                  Schedule Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
