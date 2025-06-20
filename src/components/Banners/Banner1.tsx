import React, { useEffect } from 'react';
import ElementBanner1 from './banner1-element.png';
import './Banner1.css';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Banner1: React.FC = () => {
  // Movimento do fundo no scroll
const handleScroll = () => {
  // Desativa o parallax no mobile
  if (window.innerWidth < 768) return;

  const parallaxElement = document.querySelector('.parallax') as HTMLElement;
  const scrollPosition = window.pageYOffset;
  if (parallaxElement) {
    parallaxElement.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  }
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <section className="parallax text-white py-16 flex flex-col justify-center min-h-screen md:flex-row md:items-center w-full bg-cover bg-center bg-no-repeat">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-10 pt-7">
        

        {/* Texto */}
        
          <div className="flex flex-col md:max-w-[50%] w-full text-left pl-6 pr-4 md:px-0">
            <motion.div
            initial={{ opacity: 0, x: -50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
          <h1 className="text-[21px] md:text-4xl font-bold mb-6">
            <span className="bg-black px-2 py-1">
              <Typewriter 
                words={['Soluções Tecnológicas', 'Desenvolvimento de Sites', 'Aplicações Web Personalizadas']} 
                loop={0} 
                cursor 
                cursorStyle="|" 
                typeSpeed={50}
                deleteSpeed={1}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Conquiste o mercado e leve seu negócio a outro nível com estratégias digitais e desenvolvimento web personalizados!
          </p>
          <div className="mt-4 md:mt-10">
            <a
              href="#contact"
              className="text-lg md:text-2xl inline-block px-6 py-3 border hover:bg-white text-white hover:text-black rounded-full font-medium transition"
            >
              Entrar em contato
            </a>
          </div>
          </motion.div>
        </div>

        {/* Imagem */}
        <div className="md:max-w-[50%] w-full overflow-hidden flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
          <img
            src={ElementBanner1}
            alt="Element image"
            className="w-full max-w-sm md:max-h-[450px] object-contain"
          />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner1;
