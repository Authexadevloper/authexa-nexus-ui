
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const demoScenarios = [
  {
    user: "Install Microsoft Office on device-245",
    ai: "🔄 Initiating remote installation...\n✅ Office 365 installed successfully\n📊 License activated and user configured",
    delay: 2000
  },
  {
    user: "Why is my laptop running slow?",
    ai: "🔍 Analyzing system performance...\n⚡ Found high CPU usage from background processes\n🛠️ Optimizing startup programs automatically\n✅ Performance improved by 40%",
    delay: 3000
  },
  {
    user: "Set up new employee workstation",
    ai: "🚀 Deploying standard employee setup...\n💼 Installing required business applications\n🔐 Configuring security policies\n👤 User account provisioned\n✅ Workstation ready for use",
    delay: 4000
  }
];

export default function InteractiveDemo() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [showAiResponse, setShowAiResponse] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const triggerDemo = () => {
    setShowAiResponse(false);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      setShowAiResponse(true);
    }, demoScenarios[currentScenario].delay);
  };

  const nextScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % demoScenarios.length);
    setShowAiResponse(false);
    setIsTyping(false);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Try AI Agent Live
        </motion.h2>
        
        <motion.p 
          className="text-xl text-slate-300 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Experience how Authexa's AI agents handle real IT scenarios
        </motion.p>

        <Card className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-cyan-500/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="bg-black/50 rounded-lg p-6 font-mono text-sm min-h-[200px]">
              {/* User message */}
              <div className="mb-4">
                <span className="text-cyan-400 font-semibold">You:</span>
                <span className="text-white ml-2">{demoScenarios[currentScenario].user}</span>
              </div>

              {/* AI response */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-green-400 font-semibold">Authexa AI:</span>
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showAiResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-1"
                  >
                    <span className="text-green-400 font-semibold">Authexa AI:</span>
                    {demoScenarios[currentScenario].ai.split('\n').map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3 }}
                        className="text-green-300 ml-6"
                      >
                        {line}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <Button 
                onClick={triggerDemo}
                disabled={isTyping}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              >
                {isTyping ? 'Processing...' : 'Run Demo'}
              </Button>
              
              <Button 
                onClick={nextScenario}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
              >
                Next Scenario
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
