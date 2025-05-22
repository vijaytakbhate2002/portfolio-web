import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypedText } from '@/hooks/use-typed-text';
import { FaGithub, FaLinkedin, FaKaggle, FaEnvelope } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

const HeroSection: React.FC = () => {
  const { typedText, cursor } = useTypedText(
    ['AI Enthusiast', 'ML Enthusiast', 'Python Developer', 'Data Specialist'],
    100,
    2000
  );

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Fullscreen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/profile-pic.png"
          alt="Vijay Takbhate"
          className="w-full h-full object-cover"
        />
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-white">
          <div className="text-center">
            <div className="font-mono text-primary mb-2">// Hello World</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              I'm{' '}
              <span className="bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                Vijay Takbhate
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6">
              <span>{typedText}</span>
              <span
                className={`text-primary ${
                  cursor ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-100`}
              >
                |
              </span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Currently working as a Risk Analyst at Incred Financial Services
              with a passion for AI and Machine Learning. Transforming complex
              data into impactful solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button asChild className="shadow-lg shadow-primary/20">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#resume">View Resume</a>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/vijaytakbhate2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/vijay-takbhate-b9231a236/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.kaggle.com/vijay20213"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaKaggle className="text-2xl" />
              </a>
              <a
                href="https://medium.com/@vijaytakbhate45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiMedium className="text-2xl" />
              </a>
              <a
                href="mailto:vijaytakbhate20@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <a
            href="#resume"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
