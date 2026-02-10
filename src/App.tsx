import { motion } from "motion/react";
import kenosisLogo from "figma:asset/36b89ef632443b3ebb9602954ac68da5e653901c.png";

function App() {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const glowVariants = {
    initial: { textShadow: "0 0 0px rgba(212, 175, 55, 0)" },
    animate: {
      textShadow: [
        "0 0 10px rgba(212, 175, 55, 0.5)",
        "0 0 20px rgba(212, 175, 55, 0.8)",
        "0 0 10px rgba(212, 175, 55, 0.5)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const text = "COMING SOON";
  const letters = text.split("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col">
      {/* Header with Logo */}
      <header className="pt-8 px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <img 
            src={kenosisLogo} 
            alt="Kenosis" 
            className="h-16 md:h-20 lg:h-24"
          />
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          {/* Animated Coming Soon Text */}
          <div className="mb-8 overflow-hidden">
            <div className="flex justify-center gap-2 md:gap-3">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-900"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Subtitle with Glow Effect */}
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate="animate"
            className="text-gray-600 text-base md:text-lg lg:text-xl tracking-widest mb-12"
          >
            WEBSITE SEDANG DALAM PENGEMBANGAN
          </motion.div>

          {/* Animated Dots */}
          <div className="flex justify-center gap-3 mb-12">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  backgroundColor: [
                    "rgba(212, 175, 55, 0.3)",
                    "rgba(212, 175, 55, 1)",
                    "rgba(212, 175, 55, 0.3)"
                  ]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 md:w-4 md:h-4 rounded-full"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-6 px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center text-gray-400 text-xs md:text-sm"
        >
          © PT. Kenosis Sistem Solusi
        </motion.p>
      </footer>
    </div>
  );
}

export default App;